import React, { Component } from 'react'
import apiFetch from '../Utils/fetchApi'
export default class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
             isLoading: false,
             isError: false
        }
    }
    componentDidMount= async ()=>{
        let apiValue = await apiFetch();
        this.setState({loading:false, users:apiValue.data});
        const response = await apiFetch()
         
        if(response.ok){
            const users = await response.json();
            console.log(users);
            this.setState({users,isLoading:false})
        }else{
            this.setState({isError:true,isLoading:false})
        }
    }
    tableHeader=()=>{
        return Object.keys(this.state.users[0]).map(data=><th key={data}>{data.toUpperCase()}</th>)
    }
    tableRows=()=>{
        return this.state.users.map(user=>{
            return(
                <tr key={user.id}>
                <td>{user.postId}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.body}</td>
                </tr>
            )
        })
    }
    render() {
        const {users,isLoading,isError} = this.state
        if(isLoading){
            return<div>loading</div>
        }if(isError){
            return <div>Error</div>
        }
        return users.length >0 ?
        (
            <table>
                <thead>
                    <tr>
                        {this.tableHeader()}
                    </tr>
                    </thead>
                    <tbody>
                        {this.tableRows()}
                    </tbody>
            </table>
        ):(
            <div>
                No Users
            </div>
        )
    }
}

