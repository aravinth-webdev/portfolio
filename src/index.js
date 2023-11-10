import React from 'react';
import *as ReactDOMClient from 'react-dom/client';
import Portfolio from './App';


const root =document.getElementById("root")
let Run=ReactDOMClient.createRoot(root)
Run.render(
    <div>
    <Portfolio/>
    </div>
)