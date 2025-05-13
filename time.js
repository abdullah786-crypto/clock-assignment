const clock = document.createElement('div');
clock.id = 'clock';
clock.style.width = '300px';
clock.style.height = '300px';
clock.style.borderRadius = '50%';   
clock.style.backgroundColor = 'white';
clock.style.position = 'relative';
clock.style.margin = 'auto';
clock.style.border = '2px solid black';

const hourHand = document.createElement('div');
hourHand.id = 'hourHand';
hourHand.style.position = 'absolute';
hourHand.style.width = '6px';
hourHand.style.height = '70px';
hourHand.style.backgroundColor = 'black';
hourHand.style.left = '50%';
hourHand.style.top = '50%';
hourHand.style.marginLeft = '-3px';
hourHand.style.marginTop = '-70px';
hourHand.style.transformOrigin = '50% 100%';

const minuteHand = document.createElement('div');
minuteHand.id = 'minuteHand';
minuteHand.style.position = 'absolute';
minuteHand.style.width = '4px';
minuteHand.style.height = '100px';
minuteHand.style.backgroundColor = '#444';
minuteHand.style.left = '50%';
minuteHand.style.top = '50%';
minuteHand.style.marginLeft = '-2px';
minuteHand.style.marginTop = '-100px';
minuteHand.style.transformOrigin = '50% 100%';

const secondHand = document.createElement('div');
secondHand.id = 'secondHand';
secondHand.style.position = 'absolute';
secondHand.style.width = '2px';
secondHand.style.height = '120px';
secondHand.style.backgroundColor = 'red';
secondHand.style.left = '50%';
secondHand.style.top = '50%';
secondHand.style.marginLeft = '-1px';
secondHand.style.marginTop = '-120px';
secondHand.style.transformOrigin = '50% 100%';

const centerDot = document.createElement('div');
centerDot.style.position = 'absolute';
centerDot.style.width = '12px';
centerDot.style.height = '12px';
centerDot.style.backgroundColor = 'black';
centerDot.style.borderRadius = '50%';
centerDot.style.left = '50%';
centerDot.style.top = '50%';
centerDot.style.transform = 'translate(-50%, -50%)';
centerDot.style.zIndex = '10';

for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.textContent = i;
  number.style.position = 'absolute';
  number.style.width = '30px';
  number.style.height = '30px';
  number.style.textAlign = 'center';
  number.style.fontWeight = 'bold';
  console.log('index is', i);
  
  const angle = (i - 3) * 30 * (Math.PI / 180); // angle measurement starts from 12. Angle for each number in clock like as a (for 1 = -1.0471975511965976, for 2 = -0.5235987755982988, for 3 = 0 and.......)
  console.log('angle is', angle)
  const x = 135 + 120 * Math.cos(angle); 
  const y = 140 + 120 * Math.sin(angle);

  console.log('value of x is', x);
  console.log('value of y is', y)
  
  number.style.left = `${x}px`; // for styling(margin) x direction to the number by giving the margin eg (174, 220, 255.....)
  number.style.top = `${y}px`; //
  
  clock.appendChild(number);
}

clock.appendChild(hourHand);
console.log('hour hand is ', hourHand);
console.log('minut hand is ', minuteHand);
console.log('second hand is ', secondHand);
console.log('center dot is ', centerDot);

clock.appendChild(minuteHand);
clock.appendChild(secondHand);
clock.appendChild(centerDot);

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.appendChild(clock);

const updateClock = () => {
  const now = new Date();
  const hour = now.getHours() % 12;

  console.log('hour is ', now.getHours() % 12)
  console.log('mint is ', now.getMinutes())


  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hourDeg = hour * 30 + min * 0.5; // for getting the how values in deg to show the needle in clock as degree wise
  const minDeg = min * 6 + sec * 0.1; //same as calculating the values in deg to show the needle in clock as degree
  const secDeg = sec * 6;
  console.log('seconds are', hourDeg);
  console.log('seconds are', minDeg);
  console.log('seconds are', secDeg);
  
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
}
console.log('sec deg is');

updateClock();
setInterval(updateClock, 1000);