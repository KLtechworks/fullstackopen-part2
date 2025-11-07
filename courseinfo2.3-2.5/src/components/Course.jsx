// 2.5: Separate module step 10
const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Part = ({name, exercises}) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

// 2.3: Course information step 8
const Total = ({parts}) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0)
    
    return <p><b>total of {sum} exercises</b></p>
}

const Content = ({parts}) => { 
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}           
        </div>
    ) 
}

// 2.3: Course information step 8
const Course = ({course}) => {
  return (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>       
    </div>
    
  )
}

export default Course