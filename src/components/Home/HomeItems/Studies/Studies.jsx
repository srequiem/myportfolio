import { stripBasename } from '@remix-run/router';
import React, { useEffect } from 'react';
import { useState } from 'react';

import './Studies.css';

const Studies = () => {
    // const [data, setData] = useState([]);
    // const [name, setName] = useState('');

    // const fetchingData = () => {

    //     fetch(`https://api.agify.io/?name=sacha`)
    //         .then((res) => {
    //             if (res.ok) {
    //                 return res.json();
    //             }
    //             throw new Error('Something went wrong');

    //         })
    //         .then((data) => {
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    // console.log("data: ", data);

    return (
        <>
            <div className="Studies">
                <h1 className='item_bigtitle'>Programming is a gift.<br />Let's discuss mine.</h1>
                <div className='item_container'>
                    <div className='items'>
                        <h2 className='items_number'><i className="fa-solid fa-graduation-cap"></i></h2>
                        <h3 className='items_title'>Software engineer</h3>
                        <h4 className='items_subtitle'>Former student of the 42school in Paris,
                            I started by studying the C language with a focus on system, network & security
                            before turning to the Web with Javascript and React.<br />
                            My studies at 42 school made me a complete and motivated
                            developer who never gives up.</h4>
                        <h4 className='items_title2'>Languages & Tools:</h4>
                        <p>C, Leaks, Terminal, Unix, Assembly, X86, Y86</p>
                        <p>root-me.org, Vim, Git, Github, iTerm2</p>
                    </div>
                    <div className='items'>
                        <h2 className='items_number'><i className="fa-brands fa-react"></i></h2>
                        <h3 className='items_title'>Frontend React.js</h3>
                        <h4 className='items_subtitle'>Since beginning my journey as a React frontend engineer over 4 years ago,<br />
                            I've done remote work for agencies & companies, such as Deezer or Devialet.<br />I've developed a real love for this
                            framework that I use all the time.</h4>
                        <h4 className='items_title2'>Languages & Tools:</h4>
                        <p>Js, React, Hooks, Css/Scss, Node, Next, Redux, GraphQL</p>
                        <p>Storybook, Git, Github, Jira, Figma, VsCode, ⭐️VisBug⭐️</p>
                    </div>
                    <div className='items'>
                        <h2 className='items_number'><i className="fa-solid fa-rocket"></i></h2>
                        <h3 className='items_title'>Typescript</h3>
                        <h4 className='items_subtitle'>The Cherry on the cake<br />I use Ts to make my code more readable and easier to maintain.<br />
                            One more field in my Fetch return? The type of api return as changed? Need to modify a mock? Type is not good anymore?<br />
                            Typescript to the rescue. <span style={{ color: "white" }}>🚀</span></h4>
                        <h4 className='items_title2'>Why am i different?</h4>
                        <p>My code is functional but also:<br />
                            - Clean (easily readable)<br />
                            - Maintainable (versioning)<br />
                            - Reusable 📈 (react functional)
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Studies
