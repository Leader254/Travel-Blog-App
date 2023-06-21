/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/posts${cat}`);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "The Morning After: Is the 15-inch MacBook Air any good?",
  //     desc: "In a world where every Apple laptop is thin and light, do we still need to market some of them based on that alone? In many ways, a 15-inch MacBook Air\r\n makes you wish Apple would bring back the suffix-free MacBook name for its mainstream machines. But, sill…",
  //     // "url": "https://www.engadget.com/the-morning-after-is-the-15-inch-macbook-air-any-good-111547012.html",
  //     img: "https://s.yimg.com/uu/api/res/1.2/MgulhmvT5XzISqitxc_sVA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/69c61940-09cd-11ee-b6df-98595cc38cb0.cf.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "The best smart plugs in 2023",
  //     desc: "Smart plugs are among the simpler smart home devices, giving you voice and app control over appliances like lamps, fans, humidifiers and basic coffee makers. You can create schedules and routines, too, either through a plug’s proprietary app or through your p…",
  //     // "url": "https://www.engadget.com/best-smart-plug-131542429.html",
  //     img: "https://s.yimg.com/uu/api/res/1.2/TiVS7tuDSnKWK42dI.iqTQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/358f7700-ffed-11ed-93ee-da39e04bd0ac.cf.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "How to start a smart home using Google Home",
  //     desc: "Google smart home is finally hitting its stride. We talk about where it is today and how to use it, along with a brief look at the history of Google’s smart home attempts.",
  //     // "url": "https://www.theverge.com/23744291/google-smart-home-nest-how-to",
  //     img: "https://cdn.vox-cdn.com/thumbor/gVaSUqlErGy1xoHo-VoWzTDZRJM=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24715174/236676_05_How_to_start_a_smart_home_using_Google_Home_SHaddad.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Brother Day wages war to cling to power in Foundation S2 trailer",
  //     desc: "Brother Day: \"I will look at them in the eye and reclaim what is ours.\"",
  //     // "url": "https://arstechnica.com/culture/2023/06/brother-day-wages-war-to-cling-to-power-in-foundation-s2-trailer/",
  //     img: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/found5-760x380.jpg",
  //   },
  // ];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" className="postImg" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className='link'>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Home