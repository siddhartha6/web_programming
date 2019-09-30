<?php 
	date_default_timezone_set("America/New_York");
	$timestamp = time();
	$current_day = date("l");
	$current_time = date("h:i a");
	$hours_to_show = 12;

	function get_hour_string($timestamp)
	{
		return date("g",$timestamp) . ".00 " . date("a", $timestamp);
	}
?> 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Calendar</title> 
	<link rel="stylesheet" type="text/css" href="calendar.css">
</head>
<body>
	<div class="container">
		<h1>My Calender</h1>
		<h3>Current Day: <?php echo $current_day; ?></h3>
		<h3>Current Time: <?php echo $current_time; ?></h3>
		<h3>Current Hour: <?php echo get_hour_string($timestamp); ?></h3>
		<table id="event_table">
			<tr><th class='hr_td_'> &nbsp; </th> <th class='table_header'>Jhon</th><th class='table_header'>Peter</th><th class='table_header'>Donald</th></tr>
			 
			<?php
			$hours_to_show = 12;
			for($i=0; $i <= $hours_to_show; $i++) {
				if($i%2 == 0)
				{ echo ("<tr class='even_row'> 
						 <td class='hr_td'>" . get_hour_string($timestamp) . "</td> <td> </td> <td> </td> <td></td>
						 </tr>");
				$timestamp +=3600;
				}
				else
				{ echo ("<tr class='odd_row'>
						 <td class='hr_td'>" .get_hour_string($timestamp) .  "</td> <td> </td> <td> </td> <td> </td>
			             </tr>");
						$timestamp +=3600;
			 
			    }
			}
			?>
		</table>
	</div>
</body>
</html>