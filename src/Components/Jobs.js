import React from "react";
import '../App.css';
import './articles.css'
import axios from "axios"

export default function Jobs()
{
    let [allArticles, setAllArticles] = React.useState([])



    React.useEffect(()=>{
      
        axios.get(`https://api.nytimes.com/svc/topstories/v2/jobs.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(res => setAllArticles(res.data.results))
    }, [])
       
  let copiedArray = allArticles.map((item, index) => 
  


  <div className="grid mt-4">

  <div className="col-50 border-bottom-text ">
      <h3>{allArticles[index].title}</h3>
      <p>{allArticles[index].abstract}</p>
      <p>Published date : {allArticles[index].created_date}</p>
      <p>Read the full article <a href={allArticles[index].url}>Here</a></p>
      
  </div>
  <div className="col-50 border-bottom ">
      <img src={allArticles[index].multimedia[0].url} className="img-res" loading="lazy" />
     
  </div>
  </div>

  )

    return(

        <div>

            {copiedArray}

        </div>        
    )
}