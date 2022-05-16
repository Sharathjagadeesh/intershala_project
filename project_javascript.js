var username = document.getElementById('username');
var phone = document.getElementById("PhoneNumber");
var password = document.getElementById("password");
var submit = document.getElementById('butn1');
var sbutn1 = document.getElementById("sbutn1");
var i,j;
var password_okay;

username.addEventListener("mouseover",function(){
  username.value="";
});
phone.addEventListener("mouseover",function(){
  phone.value="";
});

special_char=['@','!','#','$','%']

submit.addEventListener('click',function(){
  if(username.value == "" || phone.value=="" || password.value=="")
  {
    alert('All fields must be filled!');
  }
  else if(username.value.length<=3 || password.value.length <= 3)
  {
    alert("Username or password cannot be less than three characters!");
  }
  else if(username.value.length >10 || password.value.length >10)
  {
    alert("Username or password cannot be more than ten characters!");
  }
  else if(password.value==username.value)
  {
    alert("Password and username cannot be same!");
  }
  else if(phone.value.length!=10)
  {
    alert("Enter 10 digit phone number!");
  }
  else
  {
    for (i=0;i<5;i++)
    {
      for (j=0;j<password.value.length;j++)
      {
        if(password.value[j]==special_char[i])
        {
          password_okay=true;
          sbutn1.href="project_intershala1.html";
          exit();
        }
        else
        {
          password_okay=false;
        }
      }
    }
    if(password_okay==false)
    {
      alert('Password must contain atleast one special character!');
    }

  }
});
