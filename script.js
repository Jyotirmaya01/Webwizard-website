// scroll to sections
function goToPrograms(){
  document.getElementById('programsSection').scrollIntoView({behavior: 'smooth'});
}

function goToTrainers(){
  document.getElementById('trainersSection').scrollIntoView({behavior: 'smooth'});
}

function goToReviews(){
  document.getElementById('reviewsSection').scrollIntoView({behavior: 'smooth'});
}

// open trial popup
function openTrialPopup(){
  var content = '<h2>Start Your Free 7-Day Trial</h2>';
  content += '<form onsubmit="handleSubmit(event, \'trial\')">';
  content += '<div class="input-group"><label>Full Name</label><input type="text" required placeholder="Enter your full name"></div>';
  content += '<div class="input-group"><label>Email Address</label><input type="email" required placeholder="your@email.com"></div>';
  content += '<div class="input-group"><label>Phone Number</label><input type="tel" required placeholder="+1 234 567 8900"></div>';
  content += '<div class="input-group"><label>What is your main fitness goal?</label>';
  content += '<select required><option value="">Please select a goal</option><option>Lose Weight</option><option>Build Muscle</option><option>Get Fit</option><option>Improve Flexibility</option></select></div>';
  content += '<button type="submit" class="button btn-primary" style="width:100%; margin-top:8px;">Start My Free Trial</button>';
  content += '</form>';
  content += '<p style="margin-top:18px; color:#888; font-size:13px;">No credit card needed. You can cancel anytime during the trial period.</p>';
  showPopup(content);
}

// open schedule popup
function openSchedulePopup(){
  var content = '<h2>Weekly Class Schedule</h2>';
  content += '<div style="margin-top:22px;">';
  content += '<h3 style="color:#1abc9c; margin-bottom:14px; font-size:20px;">Monday to Friday</h3>';
  content += '<p style="margin:8px 0;"><strong>6:00 AM</strong> - Morning Cardio Blast Session</p>';
  content += '<p style="margin:8px 0;"><strong>9:00 AM</strong> - Yoga Flow Class</p>';
  content += '<p style="margin:8px 0;"><strong>12:00 PM</strong> - Strength Training Workshop</p>';
  content += '<p style="margin:8px 0;"><strong>5:00 PM</strong> - High Intensity HIIT Class</p>';
  content += '<p style="margin:8px 0;"><strong>7:00 PM</strong> - Evening Yoga & Meditation</p>';
  content += '<h3 style="color:#1abc9c; margin:20px 0 14px; font-size:20px;">Saturday and Sunday</h3>';
  content += '<p style="margin:8px 0;"><strong>8:00 AM</strong> - Weekend Warrior Bootcamp</p>';
  content += '<p style="margin:8px 0;"><strong>10:00 AM</strong> - Yoga & Meditation Session</p>';
  content += '<p style="margin:8px 0;"><strong>2:00 PM</strong> - Open Gym (Self Training)</p>';
  content += '</div>';
  content += '<button class="button btn-primary" style="width:100%; margin-top:24px;" onclick="closePopup()">Got It Thanks</button>';
  showPopup(content);
}

// open enrollment popup
function openEnrollPopup(programName){
  var content = '<h2>Enroll in ' + programName + '</h2>';
  content += '<form onsubmit="handleSubmit(event, \'enroll\')">';
  content += '<div class="input-group"><label>Full Name</label><input type="text" required placeholder="Enter your full name"></div>';
  content += '<div class="input-group"><label>Email Address</label><input type="email" required placeholder="your@email.com"></div>';
  content += '<div class="input-group"><label>Phone Number</label><input type="tel" required placeholder="+1 234 567 8900"></div>';
  content += '<div class="input-group"><label>Preferred Plan</label>';
  content += '<select required><option value="">Please select</option><option>Monthly</option><option>Quarterly</option><option>Yearly</option></select></div>';
  content += '<button type="submit" class="button btn-primary" style="width:100%; margin-top:8px;">Submit Enrollment</button>';
  content += '</form>';
  showPopup(content);
}

// contact popup
function openContactPopup(){
  var content = '<h2>Contact Us</h2>';
  content += '<form onsubmit="handleSubmit(event, \'contact\')">';
  content += '<div class="input-group"><label>Your Name</label><input type="text" required placeholder="Enter your name"></div>';
  content += '<div class="input-group"><label>Email Address</label><input type="email" required placeholder="your@email.com"></div>';
  content += '<div class="input-group"><label>Message</label><textarea required placeholder="Write your message" rows="4"></textarea></div>';
  content += '<button type="submit" class="button btn-primary" style="width:100%; margin-top:8px;">Send Message</button>';
  content += '</form>';
  showPopup(content);
}

// popup logic
function showPopup(content){
  document.getElementById('popupContent').innerHTML = content;
  document.getElementById('popupModal').classList.add('active');
}

function closePopup(){
  document.getElementById('popupModal').classList.remove('active');
}

// handle form submit
function handleSubmit(e, formType){
  e.preventDefault();
  
  if(formType === 'trial'){
    alert('Thanks for signing up for the free trial! Our team will reach out soon.');
    closePopup();
  } else if(formType === 'enroll'){
    alert('Great! You have successfully enrolled in the program! Our team will contact you very soon with next steps.');
    closePopup();
  } else if(formType === 'contact'){
    alert('Thank you for reaching out! Your message has been sent successfully. We will get back to you within 24 hours.');
    closePopup();
  }
}

// close popup when clicking outside
document.getElementById('popupModal').onclick = function(event){
  if(event.target === this){
    closePopup();
  }
};
