import { useEffect, useState } from "react"

const useFeedback = () => {
    const [feedbacks , setFeedbacks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/feedback')
        .then(res => res.json())
        .then(data => setFeedbacks(data));
    },[])
    return [feedbacks, setFeedbacks]
}

export default useFeedback;