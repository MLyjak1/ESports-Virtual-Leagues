document.addEventListener("DOMContentLoaded", () => {
 

   const myModalHeader = document.querySelector("#my-modal-header")
   const modal = document.getElementById("myModal");
   const modalTopic = document.getElementById("myModalTopic");
   const btnSignSearch = document.querySelector(".sign-serch-box")

   const btn = document.querySelector("#myBtn");
   const btnSearchHeader = document.querySelector("#myBtnSearch");
   const btnTopic = document.querySelector("#myBtnTopic");

   const btnClose = document.querySelectorAll(".btn-close");

   if (btn !== null) {
      btn.addEventListener("click", clickInvite)
   }
   if (btnSearchHeader !== null) {
      btnSearchHeader.addEventListener("click", clickHeaderSearch)
   }

   if (btnTopic !== null) {
      btnTopic.addEventListener("click", clbtnNewTopic)
   }

   function clickInvite() {
      
      document.querySelector('body').style.overflow = "hidden"
      modal.classList.add('active')
   }
   function clickHeaderSearch() {
      if (btnSignSearch !== null) {
         btnSignSearch.style.display = "block"

      }
      myModalHeader.classList.add('active')
      $('.search-input').autofocus = true;
       $('.search-input').autofocus = true;
   }

   function clbtnNewTopic() {
      document.querySelector('body').style.overflow = "hidden"
      modalTopic.classList.add('active')
   }

   btnClose.forEach((el) => {
      el.addEventListener("click", function () {
         if (myModalHeader !== null) {
            myModalHeader.classList.remove('active')
            if (btnSignSearch !== null) {
               btnSignSearch.style.display = "none"
            }
         }
         if (modalTopic !== null) {
            modalTopic.classList.remove('active')
            document.querySelector('body').style.overflow = ""
         }
         modal.classList.remove('active')
         document.querySelector('body').style.overflow = ""
      });
   })


   window.onclick = function (event) {
         if (event.target == modal) {
            modal.classList.remove('active')
            document.querySelector('body').style.overflow = ""
         }
         else if (event.target == myModalHeader) {
            myModalHeader.classList.remove('active')
            if (btnSignSearch !== null) {
               btnSignSearch.style.display = "none"
            }
            
         }
         else if (event.target == modalTopic) {
            modalTopic.classList.remove('active')
            document.querySelector('body').style.overflow = ""
         }
      

   }
  

})

