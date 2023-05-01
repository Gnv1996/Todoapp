import React from "react";
import { useState } from "react";


function TodoList() {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState('');

    function addActivity(event) {
        event.preventDefault();
        setListData((listData) => {
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity('')
            return updatedList
        })

    }
    function removeACtivity(i) {
        const updatedListData = listData.filter((id) => {
            return i != id;
        })

    }

    return (
        <div className="container">
            <div className="bg-primary rounded">
                <h1 className="py-3 pt-5 text-center ">Todo List</h1>
                <form>
                    <div className="py-4 px-5 row">
                        <div className="col-md-10">
                            <input type='text' placeholder="Add Activity" value={activity} className="form-control" onChange={(event) => {
                                setActivity(event.target.value)
                            }} />
                        </div>
                        <div className="text-center col-md-2 pb-4">
                            <button className="btn btn-success px-5 " onClick={addActivity}>Add</button>
                        </div>

                        <p className="list-heading py-2 bg-warning px-4 h4">Here is your list: {")"}</p>
                        {listData != [] && listData.map((data, i) => {
                            return (
                                <div className="row">

                                    <p key={i}>
                                        <div className="rounded bg-info px-4 py-3 h6">{data}</div>

                                        <button className='btn btn-danger' onClick={removeACtivity}>Remove</button>
                                    </p>


                                </div>
                            )
                        })}
                    </div>
                </form>
            </div>

        </div>
    )
}
export default TodoList;