<script>
	setInterval(getDate, 1000);

	let visible_menu = true;
	let bg_color = '#d1d1d1';
	let txt_color = '#000000';

	let month = 0;
	let day = 0;
	let hour = '';
	let weekday = '';
	let minute = '';

	function getDate() {
		let date = new Date();
		month = date.getMonth() + 1;
		day = date.getDate();

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

		let hour_num = date.getHours();
		if (hour_num >= 0 && hour_num <= 9) {
			hour = '0' + String(hour_num);
		} else {
			hour = String(hour_num);
		}

		let minute_num = date.getMinutes();
		if (minute_num >= 0 && minute_num <= 9) {
			minute = '0' + String(minute_num);
		} else {
			minute = String(minute_num);
		}
	}

	function toggleMenu() {
		const menu = document.getElementById('menu');
		if (menu != null && visible_menu) {
			menu.hidden = false;
			visible_menu = false;
		} else if (menu != null && !visible_menu) {
			menu.hidden = true;
			visible_menu = true;
		}
	}
</script>

<svelte:body style="background: blue" />

<div class="menu-container">
	<button on:click={toggleMenu} style:color={txt_color}>settings</button>
	<div id="menu" class="menu" hidden={visible_menu}>
		<div>
			<p style:color={txt_color}>background</p>
			<input type="color" bind:value={bg_color} />
		</div>
		<div>
			<p style:color={txt_color}>text</p>
			<input type="color" bind:value={txt_color} />
		</div>
	</div>
</div>

<div style:background-color={bg_color} class="container">
	<div style:background-color={bg_color} class="calendar">
		<div class="month"><p style:color={txt_color}>{month}</p></div>
		<div class="day"><p style:color={txt_color}>{day}</p></div>
		<div class="weekday"><p style:color={txt_color}>{weekday}</p></div>
		<div class="time-container">
			<p style:color={txt_color} class="hour">{hour}</p>
			<p style:color={txt_color} class="colon">:</p>
			<p style:color={txt_color} class="minute">{minute}</p>
		</div>
	</div>
</div>

<style>
	.menu-container {
		position: absolute;
		font-family: 'Montserrat', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
	}

	.menu-container button {
		cursor: pointer;
		background: transparent;
		border: none;
	}

	.menu {
		width: 20vw;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.calendar {
		width: 45vw;
		height: 45vw;
		border-radius: 50px;
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
