const bannerSwiper = new Swiper(".bannerSwiper", {
  loop: true,
  // Default parameters
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  }
});

const Cardswiper = new Swiper(".ProjectSections", {
  loop: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 1,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1008: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400:{
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
  autoplay: {
    delay: 2000, // 3 seconds
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".ProjectSection-button-next",
    prevEl: ".ProjectSection-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper('.RamdanProjectSwiper', {
  // loop: true,
  navigation: {
    nextEl: '.RamdanProject-button-next',
    prevEl: '.RamdanProject-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // when window width is >= 640px
    
    1404: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 5000, // 3 seconds
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
});

// Get the modal element
const modal = document.getElementById("exampleModal");

// Add event listener for when the modal is shown
// modal.addEventListener("shown.bs.modal", function () {
//   // Get all input fields inside the modal
//   const inputs = modal.querySelectorAll(".char-input");

//   // Set focus to the first input when modal opens
//   inputs[0].focus();

//   // Add event listeners to all inputs
//   inputs.forEach(function (input, index) {
//     // Handle input changes for auto-tabbing
//     input.addEventListener("input", function () {
//       // If input has a value and there's a next input, focus it
//       if (this.value.length === 1 && index < inputs.length - 1) {
//         inputs[index + 1].focus();
//       }

//       // If all inputs are filled, focus the confirm button
//       if (index === inputs.length - 1 && this.value.length === 1) {
//         const confirmButton = modal.querySelector(".btn-confrim");
//         if (confirmButton) {
//           confirmButton.focus();
//         }
//       }
//     });

//     // Handle key presses for backspace navigation
//     input.addEventListener("keydown", function (e) {
//       // If backspace is pressed and input is empty, focus previous input
//       if (e.key === "Backspace" && this.value === "" && index > 0) {
//         inputs[index - 1].focus();
//       }
//     });
//   });

//   // Reset input fields when modal is hidden
//   modal.addEventListener("hidden.bs.modal", function () {
//     const inputs = modal.querySelectorAll(".char-input");
//     inputs.forEach(function (input) {
//       input.value = "";
//     });
//   });
// });

// // Add this to your JavaScript file
// function updateGradientPosition() {
//   // Get the current viewport width
//   const viewportWidth = window.innerWidth;
//   // Calculate the appropriate gradient positions based on viewport width

//   // Set default values for exactly 1920px
//   let gradientStart = 64;
//   let gradientEnd = 50;

//   // Only apply calculations for screens larger than 1920px
//   if (viewportWidth > 1920) {
//     gradientStart = 55 + (viewportWidth - 1920) * 0.015;
//     gradientEnd = 50 + (viewportWidth - 1920) * 0.2;
//   }

//   // Set CSS custom properties with the calculated values
//   document.documentElement.style.setProperty(
//     "--gradient-start",
//     `${gradientStart}%`
//   );
//   document.documentElement.style.setProperty(
//     "--gradient-end",
//     `${gradientEnd}%`
//   );
// }

// // Run on page load
// updateGradientPosition();

// // Run whenever the window is resized
// window.addEventListener("resize", updateGradientPosition);

// ///checkout
// // // Add event listeners to buttons
// document.getElementById("old_User").addEventListener("click", function () {
//   showDiv("old_form", this);
// });
// document.getElementById("new_User").addEventListener("click", function () {
//   showDiv("new_form", this);
// });

// function showDiv(divId, selectedButton) {
//   // Hide all divs
//   const divs = document.querySelectorAll(".form_User");
//   divs.forEach((div) => (div.style.display = "none"));

//   // Show the selected div
//   const selectedDiv = document.getElementById(divId);
//   if (selectedDiv) {
//     selectedDiv.style.display = "block";
//   }

//   // Remove active class from all buttons
//   const buttons = document.querySelectorAll(".btn_user");
//   buttons.forEach((btn) => btn.classList.remove("active"));

//   // Add active class to the clicked button

//   selectedButton.classList.add("active");
// }

// // // Add event listeners to buttons
// document.getElementById("visa").addEventListener("click", function () {
//   showDiv("cratedCard", this);
// });
// document.getElementById("apple-pay").addEventListener("click", function () {
//   showDiv("applepay", this);
// });
// document.getElementById("bank").addEventListener("click", function () {
//   showDiv("BandkTrans", this);
// });
// function showDiv(divId, selectedButton) {
//   // Hide all divs
//   const divs = document.querySelectorAll(".content-div");
//   divs.forEach((div) => (div.style.display = "none"));

//   // Show the selected div
//   const selectedDiv = document.getElementById(divId);
//   if (selectedDiv) {
//     selectedDiv.style.display = "block";
//   }

//   // Remove active class from all buttons
//   const buttons = document.querySelectorAll("button");
//   buttons.forEach((btn) => btn.classList.remove("active"));

//   // Add active class to the clicked button

//   selectedButton.classList.add("active");
// }



// MY WORK  

document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the class 'Card'
  const cards = document.querySelectorAll('.home .Card');

  // Add a click event listener to each card
  cards.forEach((card, idx) => {
    card.addEventListener('click', function() {
      // Store the clicked card index in localStorage
      localStorage.setItem('selectedCardIndex', idx);

      // Redirect to category.html
      window.location.href = 'category.html';
    });
  });
});

document.querySelectorAll('.swiper-slide').forEach(function(slide) {
  var amountBtns = slide.querySelectorAll('.amount-btn');
  amountBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      amountBtns.forEach(function(b) { b.classList.remove('active-amount'); });
      btn.classList.add('active-amount');
      // Optionally, set the input value if present
      var input = slide.querySelector('.custom-card-input');
      if(input) input.value = btn.textContent.replace(/[^\d]/g, '');
    });
  });


  


});

// Fast Pay Animation Implementation
document.addEventListener("DOMContentLoaded", function() {
  // Fast Pay functionality
  const fastPay = document.querySelector('.fast-pay');
  const fastPayContainer = document.querySelector('.fast-pay .container');
  const donationForm = document.querySelector('.fast-pay .donation-form');
  const donationOptions = document.querySelectorAll('.fast-pay .donation-option');
  const projectGroups = document.querySelectorAll('.fast-pay .project-group');
  const projectSelects = document.querySelectorAll('.fast-pay .project-select');
  const donationAmounts = document.getElementById('donation-amounts');
  const amountGroups = document.querySelectorAll('.fast-pay .amount-group');
  
  if (fastPayContainer) {
    // Toggle expanded state when clicking the container
    fastPayContainer.addEventListener('click', function(e) {
      if (!fastPay.classList.contains('expanded')) {
        fastPay.classList.add('expanded');
      }
      else {
        fastPay.classList.remove('expanded');
      }
    });
    
    // Handle donation option selection
    donationOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        // Remove active class from all options
        donationOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        this.classList.add('active');
        
        // Show corresponding project group
        const selectedOption = this.dataset.option;
        projectGroups.forEach(group => {
          if (group.dataset.for === selectedOption) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
        
        // Hide donation amounts when changing donation type
        if (donationAmounts) {
          donationAmounts.style.display = 'none';
        }
        
        // Reset project selects
        projectSelects.forEach(select => {
          select.selectedIndex = 0;
        });
      });
    });
    
    // Handle project selection
    projectSelects.forEach(select => {
      select.addEventListener('change', function() {
        // Show donation amounts section
        if (donationAmounts) {
          donationAmounts.style.display = 'block';
        }
        
        // Get the donation type from the data attribute
        const donationType = this.dataset.type;
        
        // Show the corresponding amount group
        amountGroups.forEach(group => {
          if (group.dataset.for === donationType) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
      });
    });
    
    // Handle amount button selection
    const amountButtons = document.querySelectorAll('.fast-pay .amount-btn');
    amountButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Find the parent amount group
        const parentGroup = this.closest('.amount-group');
        
        // Remove active class from all buttons in this group
        const groupButtons = parentGroup.querySelectorAll('.amount-btn');
        groupButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // You can also update a hidden input or variable with the selected amount
        const amountValue = this.textContent.replace(/[^\d]/g, '');
        console.log('Selected amount:', amountValue);
      });
    });
    
    // Show initial project group based on active donation option
    const initialActiveOption = document.querySelector('.fast-pay .donation-option.active');
    if (initialActiveOption) {
      const selectedOption = initialActiveOption.dataset.option;
      const correspondingGroup = document.querySelector(`.fast-pay .project-group[data-for="${selectedOption}"]`);
      if (correspondingGroup) {
        correspondingGroup.style.display = 'block';
      }
    }
    
    // Prevent form clicks from closing the container
    if (donationForm) {
      donationForm.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
    
    // Close fast pay when clicking outside
    document.addEventListener('click', function(e) {
      if (fastPay.classList.contains('expanded') && 
          !fastPayContainer.contains(e.target) && 
          e.target !== fastPayContainer) {
        fastPay.classList.remove('expanded');
      }
    });
    
    // Handle escape key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && fastPay.classList.contains('expanded')) {
        fastPay.classList.remove('expanded');
      }
    });
  }
});

 

 