import { gradients, baseRating } from "@/utils"

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const monthsArr = Object.keys(months)
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const demoData = {
    "15": 2, "16": 4, "17": 1, "18": 3, "19": 5,
    "20": 2, "21": 4, "22": 1, "23": 3, "24": 5,
}

const Calendar = (props) => {
    const {demo} = props
    const year = 2025
    const month = 'February'
    const monthNow = new Date(year, Object.keys(months).indexOf(month), 1)
    const firstDayOfMonth = monthNow.getDay()
    const daysInMonth = new Date(year, Object.keys(month).indexOf(month) + 1, 0).getDate()

    const daysToDisplay = firstDayOfMonth + daysInMonth

    const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)

    return (
        <div className="flex flex-col overflow-hidden gap-1 sm:py-4 md:py-10" >
            {[...Array(numRows).keys()].map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="grid grid-cols-7 gap-1">
                        {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                            let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1)

                            let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true

                            let isToday = dayIndex === now.getDate()

                            if(!dayDisplay){
                                return (
                                    <div className="bg-white" key={dayOfWeekIndex} />
                                )
                            }

                            const color = demo ?
                                gradients.indigo[baseRating[dayIndex]] : dayIndex in demoData ? 
                                gradients.indigo[demoData[dayIndex]] :
                                'white'

                            return (
                                <div style={{ background: color }} className={'text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ' + (isToday ? ' border-indigo-400' : ' border-indigo-100') + (color === 'white' ? ' text-indigo-400' : ' text-white')} key={dayOfWeekIndex}>
                                    <p>{dayIndex}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}
 
export default Calendar;