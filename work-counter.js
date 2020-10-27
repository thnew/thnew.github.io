javascript:
if (workHourInterval == null || confirm("Interval is already running. Restart?")) {
    window.clearInterval(workHourInterval);
    let markedAsEnteredIntoDevOps = {};
    var workHourInterval = window.setInterval(() => {
        /* Counts work hours in Google Calendar and writes them next to the day labels. Has live updates*/
        (function showWorkHours() {
            const HEIGHT_OF_ONE_HOUR = 46;
            const LIST_OF_ACCEPTED_COLORS = ['rgb(198, 218, 252)', 'rgb(197, 203, 233)', 'rgb(66, 133, 244)', 'rgb(63, 81, 181)'];
            const taskNumberRegExp = new RegExp("\^#[0-9]*");
            const calendarWeekRegExp = new RegExp("[0-9]{1,2}"); const dayHeaderElements = document.querySelectorAll('.SU7tYb .qAeuG'); const dayDateElements = document.querySelectorAll(".KSxb4d"); let calendarWeek = document.querySelector(".wWdzec").innerText; calendarWeek = calendarWeekRegExp.exec(calendarWeek)[0]; const workHoursLabelsToRemove = document.querySelectorAll('.SU7tYb .qAeuG > *'); workHoursLabelsToRemove.forEach(child => { child.parentNode.removeChild(child); }); document.querySelectorAll('.WJVfWe').forEach((dayColumn, dayColumnIndex) => {
                let accountHours = { 'Default': 0 }; let dayHeaderElement = dayHeaderElements[dayColumnIndex]; let dayDate = dayDateElements[dayColumnIndex].innerText;
                dayHeaderElement.taskHours = {};
                dayColumn.querySelectorAll('.NlL62b').forEach(item => {
                    if (LIST_OF_ACCEPTED_COLORS.indexOf(item.style.backgroundColor) === -1) {
                        return;
                    } let hours = item.offsetHeight / HEIGHT_OF_ONE_HOUR;
                    hours = Math.round(hours * 2) / 2;
                    let account = 'Default';
                    let dateTitle = item.querySelector('.FAxxKc').innerText;
                    let parts = dateTitle.split(']');
                    if (parts.length > 1) {
                        account = parts[0].split('[').pop();
                    } accountHours[account] = accountHours[account] ? accountHours[account] + hours : hours;
                    let taskNumbers = taskNumberRegExp.exec(dateTitle);
                    let hasTaskNumber = taskNumbers && taskNumbers.length != 0;
                    if (hasTaskNumber) {
                        let taskNumber = taskNumbers[0];
                        dayHeaderElement.taskHours[taskNumber] = dayHeaderElement.taskHours[taskNumber] ? dayHeaderElement.taskHours[taskNumber] + hours : hours;
                    }
                });
                let totalParts = [];
                for (let account in accountHours) {
                    let text = (account != 'Default' ? '[' + account + '] ' : '');
                    text += accountHours[account];
                    totalParts.push(text);
                } let timeItem = document.createElement('span');
                timeItem.innerText = " (" + totalParts.join(' | ') + ")";
                dayHeaderElement.appendChild(timeItem);
                for (let taskNumber in dayHeaderElement.taskHours) {
                    let hours = dayHeaderElement.taskHours[taskNumber];
                    let taskAtDayIdentifier = calendarWeek + " " + dayDate + " " + taskNumber;
                    let areTaskHoursEnteredIntoDevOps = markedAsEnteredIntoDevOps[taskAtDayIdentifier];
                    let taskItem = document.createElement('a');
                    taskItem.href = "https://bdoag.visualstudio.com/BalanceConfirmation/_workitems/edit/" + taskNumber.slice(1);
                    taskItem.target = "_blank";
                    taskItem.style.backgroundColor = areTaskHoursEnteredIntoDevOps ? "#16A085" : "#7F8C8D";
                    taskItem.style.color = "#fff";
                    taskItem.style.borderRadius = "3px";
                    taskItem.style.display = "inline-block";
                    taskItem.style.marginRight = "3px";
                    taskItem.style.lineHeight = "20px";
                    taskItem.style.padding = "0px 3px";
                    taskItem.addEventListener('auxclick', function (e) {
                        if (e.button == 1) {
                            this.style.backgroundColor = "#16A085";
                            markedAsEnteredIntoDevOps[taskAtDayIdentifier] = true;
                        } else if (e.button == 2) {
                            this.style.backgroundColor = "#7F8C8D";
                            markedAsEnteredIntoDevOps[taskAtDayIdentifier] = false;
                            e.preventDefault();
                        }
                    });
                    dayHeaderElement.appendChild(taskItem);
                    let taskNumberItem = document.createElement('span');
                    taskNumberItem.innerText = taskNumber;
                    taskItem.appendChild(taskNumberItem);
                    let taskValueItem = document.createElement('span');
                    taskValueItem.innerText = " " + hours + "h";
                    taskItem.appendChild(taskValueItem);
                }
            });
        })();
    }, 1000);
}