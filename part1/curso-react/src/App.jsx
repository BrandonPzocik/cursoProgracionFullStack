const Header = ({course}) => {
  // const {course} = props 
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return <h4>{part} {exercises}</h4>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Prueba = (props) => {
  return <p>{props.name}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
  const name = 'desde una variable'
  const products = [
    {name:"ball", price:12000},
    {name:"cup", price:5000}
  ]

  return (
    <div>
      <Header course= {course}/>
      <Content parts={parts} />
      <Prueba name="programando"/>
      <Prueba name={name}></Prueba>
      <h1>{products[1].name} {products[1].price}</h1>
      <h1> {products[0].name} {products[0].price} </h1>
    </div>
  )
}

export default App