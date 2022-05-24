import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import CreateStream from './Streams/CreateStream';
import DeleteStream from './Streams/DeleteStream';
import EditStream from './Streams/EditStream';
import ListStreams from './Streams/ListStreams';
import ShowStream from './Streams/ShowStream';
import Header from "./Header";




const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path= "/" exact component = {ListStreams} />
                    <Route path= "/streams/new" exact component = {CreateStream} />
                    <Route path= "/streams/edit" exact component = {EditStream} />
                    <Route path= "/streams/delete" exact component = {DeleteStream} />
                    <Route path= "/streams/show" exact component = {ShowStream} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;