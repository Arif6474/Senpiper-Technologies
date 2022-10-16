import { useEffect, useState } from "react"

const useFeedback = () => {
    const [feedbacks , setFeedbacks] = useState([])
    
    useEffect(() => {
        fetch('https://senpiper-server-side.vercel.app/feedback')
        .then(res => res.json())
        .then(data => setFeedbacks(data));
    },[])
    return [feedbacks, setFeedbacks]
}

export default useFeedback;