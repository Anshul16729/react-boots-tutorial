function Student (props){
    return (
       <div>
            <span>Student {props.data.name}</span>
            <span>Student {props.data.email}</span>
            <span>Student {props.data.address}</span>
       </div>
    )
}

export default Student;