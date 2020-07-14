import React from "react"
import Title from "./Title"
import Form from "./Form"
import Weather from "./Weather"
const API_KEY="85aef09f1e9525aec7fe9693387a3f23"
class App extends React.Component
{
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
   getWeather = async(event) =>
  {
    event.preventDefault()
    const city=event.target.elements.city.value;
    const country=event.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json()
    if(city && country)
    {
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:" "
      })
    }
    else
    {
      console.log(data)
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter city and country"
      })
    }
  }
  render()
  {
    return(
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
      </div>
    )
  }
}
export default App
