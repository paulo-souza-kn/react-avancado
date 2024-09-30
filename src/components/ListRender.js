import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus","Pedro","João","Paulo"])

const [users, setUsers] = useState([
    {id:1,name:"Matheus", age:31},
    {id:2,name:"Pedro",age:29},
    {id:3,name:"João",age:33},
    {id:4,name:"Paulo",age:40}
])

const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {

        return prevUsers.filter((user) => randomNumber !== user.id)
    })
}
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <ul>
                <button onClick={deleteRandom}>Delete random user</button>
            </ul>
        </div>
    );
};

export default ListRender;