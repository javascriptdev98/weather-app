import React from 'react'
import "./Forecast.css"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function Forecast({data}) {

    const dayInAWeek = new Date().getDay();

    const forecastDays  = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(dayInAWeek,'dayInaWeek');
    console.log(forecastDays,'forecastDays')

  return (
    <>
    <label className='title'>Daily</label>
    <Accordion allowZeroExpanded>
        {
            data.list.slice(0,7).map((item,idx) => {
                return  (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className='icon-small'/>

                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_max)}°C/{Math.round(item.main.temp_min)}°C</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Feels Like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
             
                )
            })
        }
        <AccordionItem></AccordionItem>
    </Accordion>
    </>
  )
}

export default Forecast