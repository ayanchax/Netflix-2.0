import React, { useEffect, useState } from 'react'
import db from "../firebase"
import { selectUser } from "../features/userSlice"
import { useSelector } from 'react-redux'
import { loadStripe } from "@stripe/stripe-js"
import "./PlansScreen.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function PlansScreen() {
    const user = useSelector(selectUser)
    const [products, setProducts] = useState([])
    const [subscribeButtonPressed, setSubscribeButtonPressed] = useState(false)
    const [subscription, setSubscription] = useState(null)
    useEffect(() => {
        db.collection('products').where('active', "==", true).get().then((querySnapshotCollection) => {
            const products = {}
            querySnapshotCollection.forEach(async snapshotDoc => {
                products[snapshotDoc.id] = snapshotDoc.data()
                const priceSnap = await snapshotDoc.ref.collection('prices').where('active', "==", true).get()
                priceSnap.docs.forEach(price => {
                    products[snapshotDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            })
            setProducts(products)

        })
    }, [])
    useEffect(() => {
        db.collection('customers').doc(user.uid).collection('subscriptions').get().then((querySnapshotCollection) => {
            querySnapshotCollection.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds
                })
            })
        })
    }, [user.uid])

    const loadCheckout = async (priceId, productName) => {
        toast.warning("Redirecting you to payments....", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
        });
        setSubscribeButtonPressed(true)
        // query the logged in customer in firestore db collection and add a checkout session document in the checkout_sessions collection
        //  for them for the recent check out activity.
        // Each user or customer will have 1 individual checkout_sessions collection and individual 1 or more checkout documents inside the collection
        const loggedInCustomer = await db.collection("customers").doc(user.uid).collection('checkout_sessions').add({
            price: priceId,

            success_url: encodeURI(window.location.origin + "?z=0&paymentConsoleMessage=" + btoa('You are now subscribed to our ' + productName)),
            cancel_url: encodeURI(window.location.origin + "?z=1&paymentConsoleMessage=" + btoa('An error occured at the merchant website while subscribing you to ' + productName))

        })



        loggedInCustomer.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data()
            if (error) {
                toast.error(error.message, {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 3000,
                });
                setSubscribeButtonPressed(false)
            }
            // on getting the logged in customer(sessionid exists) and checking if they are eligible to check out we proceed further to open up(redirect user to) stripe payments link dedicated for the customer
            if (sessionId) {
                const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_SECRET)
                stripe.redirectToCheckout({ sessionId })
            }
        })
    }

    return (
        <div className="plansScreen">
            {subscription && <h3>Plans &raquo; Current Plan ({subscription.role})</h3>}
            {subscription && <p className="plansScreen__renewalDate"> Next Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
            {Object.entries(products).map(([productId, productData]) => {
                const isEntryACurrentPackage = productData?.name.toLowerCase().includes(subscription?.role)
                return (
                    <div key={productId}
                        className={`plansScreen__plan ${isEntryACurrentPackage && "plansScreen__plan__disabled"}`}
                    >
                        <div className="plansScreen__planinfo">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button className={`plansScreen__subscribePlan ${(subscribeButtonPressed || isEntryACurrentPackage) && "disabled"}`}
                            onClick={(e) => loadCheckout(productData?.prices?.priceId, productData?.name)}>

                            {isEntryACurrentPackage ? 'Current Plan' : 'Subscribe'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
