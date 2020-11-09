import React from "react";
import { Card, Avatar } from "antd";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";
const { Meta } = Card;

let html = "https://cdn.svgporn.com/logos/html-5.svg";
let css = "https://cdn.svgporn.com/logos/css-3.svg";
let bootstrap = "https://cdn.svgporn.com/logos/bootstrap.svg";
let react = "https://cdn.svgporn.com/logos/react.svg";
let redux = "https://cdn.svgporn.com/logos/redux.svg";
let javascript = "https://cdn.svgporn.com/logos/javascript.svg";


const cardData = [
  {
    img: "images/movie.png",
    name: "Movie Finder",
    description:
      "This Website will find the movie according to search and give the all the essential details like relaese date,poster,rarting and description.The axios were used for fetching the API . This will devlop on Html,Css,JavaScript, react and bootstrap",
    teckstack: [html,css,javascript, react,bootstrap],
    source: "https://github.com/adityashukla0801/Movie-Finder",
    live: "https://moviefinder-react.netlify.app/",
  },
  {
    img: "images/crud.png",
    name: "CRUD",
    description:
      "This is the CRUD means you can Create Read Update Delete of the details of the Employee.It will use LocalStorage of the system for storing the data . This will devlop on Html,Css,JavaScript, react and bootstrap",
    teckstack: [html,css,javascript, react,bootstrap],
    source: "https://github.com/adityashukla0801/CRUD-Project",
    live: "https://crudproject.netlify.app/",
  },
  {
    img: "images/todo.png",
    name: "ToDo List",
    description:
      "An app where user can create new or delete a list. Also user can view list and if incompleted task were delete then you can see in trash and from their you can restore or permantely delete. This will devlop on Html,Css,JavaScript, react ,redux and bootstrap",
    teckstack: [html,css,javascript, react, redux,bootstrap],
    source: "https://github.com/adityashukla0801/ToDo-List",
    live: "https://newtodotask.netlify.app",
  },
  {
    img: "images/githubfinder.png",
    name: "GitHub Finder",
    description:
      "It will find the github users by the username and show their profile.GitHub API were used for fetching the data of the github users.This will develop on Html,Css,JavaScript and React.",
    teckstack: [html,css,javascript,react],
    source:
      "https://github.com/adityashukla0801/Github-finder-with-react",
    live: "https://usingreactgithubfinder.netlify.app",
  },
  {
    img: "images/stopwatch.png",
    name: "Stopwatch and Timer",
    description:
      "It Develpos on Html,Css,JavaScrip,React and Bootstrap.Stopwatch records the time of the watch and timer will count time that will set",
    teckstack: [html, css,javascript, bootstrap, react],
    source: "https://github.com/adityashukla0801/Stopwatch-and-Timer",
    live: "https://stopwatch-and-timer.netlify.app",
  },
  {
    img: "images/profile.png",
    name: "Profile Scroller",
    description:
      "This shows the profile of a person and their details like photo,age,gender and post.Then scroll the profile and shows the next profile.This will develop on Html,Css and JavaScript",
    teckstack: [html, css,javascript],
    source: "https://github.com/adityashukla0801/Profile-Scroller",
    live: "https://profilescrollerjs.netlify.app/",
  },
  {
    img: "images/addtask.png",
    name: "Task List",
    description:
      "In this You can Add a task for doing later and then you can delete after done .You Can also filter your task.This will develop on Html,Css and JavaScript",
    teckstack: [html, css,javascript],
    source: "https://github.com/adityashukla0801/Task-List",
    live: "https://addtasklist.netlify.app/",
  },
  {
    img: "images/hotel.png",
    name: "Hotel Website",
    description:
      "Hotel Website devlop on Html and Css.It is a static website and fully responsive",
    teckstack: [html, css],
    source: "https://github.com/adityashukla0801/Hotel-Website",
    live: "https://hotelwebsite1.netlify.app",
  },
  {
    img: "images/spatial.png",
    name: "Spatial Website",
    description:
      "A Static website template fully responsive created using Html and css.",
    teckstack: [html, css],
    source: "https://github.com/adityashukla0801/Spatial-Website",
    live: "https://spatialwebsite.netlify.app",
  },
];

function ListProject() {
  return (
    <div className="d-flex flex-wrap justify-content-center col-md-10 col-md-12">
      {cardData.map((ele) => {
        return (
          <Card
            className="my-3 mx-3 border border-dark shadow-lg"
            style={{ width: 350, marginBottom: 10 }}
            cover={<img alt="example" src={ele.img} className="p-1" />}
            actions={[
              <GithubOutlined
                key="github"
                onClick={() => window.open(ele.source)}
              />,
              <EyeOutlined key="demo" onClick={() => window.open(ele.live)} />,
            ]}
          >
            <Meta
              title={ele.name}
              className="text-dark"
              description={ele.description}
            />
            <Meta className="my-3" title="Teck stack used :" description="" />
            {ele.teckstack.map((img) => (
              <img src={img} className="project-icon" />
            ))}
          </Card>
        );
      })}
    </div>
  );
}

export default ListProject;
