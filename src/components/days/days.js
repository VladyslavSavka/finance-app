import React from 'react';
import {connect} from 'react-redux';
import {dayChosen} from '../../actions';

const Days = ({dayChosen, days}) => {

    const dateStr = (date) => {
        const year = date.getFullYear();
        let month = null;
        let day = null;

        if((date.getMonth()+1)<10){
            month = '0' + (date.getMonth()+1);
        } else {
            month = String(date.getMonth() + 1);
        }

        if(date.getDate()<10){
            day = '0' + (date.getDate());
        } else {
            day = date.getDate();
        }
        
        const string= year+month+day;

        return string;
    }

    const onDayChanged = () => {
        const days = document.getElementsByName('days');
        const dates = [];
        
        for (let i=0; i<days.length; i++){
            
            if(days[i].checked){
                const now = new Date();
                let date = null;
                let string = null;

                switch(days[i].id){
                    case 'today':
                        date = now;

                        string = dateStr(date);

                        dates.push(string);
                        break;
                    
                    case 'sevenDays':
                        date = now;
                        date.setDate(date.getDate()-7);
                        
                        string = dateStr(date);
                        
                        dates.push(string);
                        break;

                    case 'month':
                        date = now;
                        date.setMonth(date.getMonth()-1);

                        string = dateStr(date);

                        dates.push(string);
                        break;
                    
                    case 'year':
                        date=now;
                        date.setFullYear(date.getFullYear()-1);

                        string = dateStr(date);

                        dates.push(string);
                        break;
                    default:
                        break;
                }
            }
        }
        dayChosen(dates);
    }

    return (
        <div className="container flex-column mt-5">
            <div className="custom-control custom-checkbox p-2">
                <input type='checkbox' className="custom-control-input"
                name="days" id='today' onChange={onDayChanged}>
                </input>
                <label htmlFor="today" className="custom-control-label">Today</label>
            </div>
            <div className="custom-control custom-checkbox p-2">
                <input type='checkbox' className="custom-control-input"
                name="days" id='sevenDays' onChange={onDayChanged}>
                </input>
                <label htmlFor="sevenDays" className="custom-control-label">7 days ago</label>
            </div>
            <div className="custom-control custom-checkbox p-2">
                <input type='checkbox' className="custom-control-input"
                name="days" id='month' onChange={onDayChanged}>
                </input>
                <label htmlFor="month" className="custom-control-label">Month ago</label>
            </div>
            <div className="custom-control custom-checkbox p-2">
                <input type='checkbox' className="custom-control-input"
                name="days" id='year' onChange={onDayChanged}>
                </input>
                <label htmlFor="year" className="custom-control-label">Year ago</label>
            </div>
        </div>
    )
}

const mapStateToProps = ({days}) => {
    return {days}
}

const mapDispatchToProps = {
    dayChosen
}

export default connect(mapStateToProps, mapDispatchToProps)(Days);