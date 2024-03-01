<script>
	setInterval(getDate, 1000);

	let month = 0;
	let day = 0;
	let hour = 0;
	let weekday = '';
	let minute = '';

	function getDate() {
		let date = new Date();
		month = date.getMonth() + 1;
		day = date.getDate();
		hour = date.getHours();

		let weekday_num = date.getDay();
		if (weekday_num == 0) {
			weekday = 'Sun';
		} else if (weekday_num == 1) {
			weekday = 'Mon';
		} else if (weekday_num == 2) {
			weekday = 'Tue';
		} else if (weekday_num == 3) {
			weekday = 'Wed';
		} else if (weekday_num == 4) {
			weekday = 'Thu';
		} else if (weekday_num == 5) {
			weekday = 'Fri';
		} else if (weekday_num == 6) {
			weekday = 'Sat';
		}

		let minute_num = date.getMinutes();
		if (minute_num >= 0 && minute_num <= 9) {
			minute = '0' + String(minute_num);
		} else {
			minute = String(minute_num);
		}
	}
</script>

<div class="container">
	<div class="calendar">
		<div class="month"><p>{month}</p></div>
		<div class="day"><p>{day}</p></div>
		<div class="weekday"><p>{weekday}</p></div>
		<div class="time-container">
			<p class="hour">{hour}</p>
			<p class="colon">:</p>
			<p class="minute">{minute}</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.calendar {
		width: 45vw;
		height: 45vw;
		border-radius: 50px;
		background: #d1d1d1;
		box-shadow:
			-20px 20px 60px #b2b2b2,
			20px -20px 60px #f0f0f0;
		font-family: 'Montserrat', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		text-align: center;
	}

	.month {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		height: 25%;
		margin-top: 0;
		margin-bottom: 0;
	}

	.month p {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 5vw;
	}

	.day {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50%;
		margin-top: 0;
		margin-bottom: 0;
	}

	.day p {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 7vw;
	}

	.weekday {
		display: flex;
		justify-content: center;
		height: 5%;
		margin-top: 0;
		margin-bottom: 0;
	}

	.weekday p {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 2vw;
	}

	.time-container {
		display: flex;
		justify-content: center;
		height: 20%;
		margin-top: 0;
		margin-bottom: 0;
	}

	.time-container p {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 3vw;
	}

	.hour {
		width: 10%;
	}

	.colon {
		width: 10%;
	}

	.minute {
		width: 10%;
	}
</style>
