// Testimonials data
const testimonials = [
  { text: "Layanan cepat, rapi, dan sangat membantu saat deadline.", author: "Anisa R." },
  { text: "Profesional, revisi gratis, dan hasilnya memuaskan.", author: "Raka T." },
  { text: "Berkat Haikal, skripsiku lebih terarah. Thank you!", author: "Dina L." },
  { text: "Responsive banget! Dikerjain dengan hati.", author: "Fahri M." },
  { text: "Sangat aman dan terpercaya. Privasiku terjaga.", author: "Silvia N." },
  { text: "Kualitas kerja sangat memuaskan, akan order lagi!", author: "Budi S." },
  { text: "Harga terjangkau tapi kualitas premium. Recommended!", author: "Maya P." },
  { text: "Tim yang sangat profesional dan komunikatif.", author: "Andi W." },
  { text: "Pengerjaan tepat waktu, hasil sesuai ekspektasi.", author: "Rina K." },
  { text: "Pelayanan 24/7, sangat membantu mahasiswa.", author: "Doni H." },
  { text: "Revisi unlimited sampai puas, mantap!", author: "Sari M." },
  { text: "Kerjasama yang sangat menyenangkan dan lancar.", author: "Agus L." },
  { text: "Hasil kerja rapi dan sesuai dengan guideline.", author: "Lina F." },
  { text: "Sangat membantu dalam menyelesaikan tugas akhir.", author: "Rizki A." },
  { text: "Pelayanan ramah dan sabar dalam menjelaskan.", author: "Dewi C." },
  { text: "Kualitas terjamin, harga bersahabat di kantong.", author: "Yoga B." },
  { text: "Proses pengerjaan transparan dan dapat dipantau.", author: "Nita J." },
  { text: "Tim yang sangat berpengalaman di bidangnya.", author: "Hendra G." },
  { text: "Hasil melampaui ekspektasi, sangat puas!", author: "Indah R." },
  { text: "Komunikasi lancar, respon cepat setiap saat.", author: "Bayu K." },
  { text: "Sangat membantu dalam research dan analisis.", author: "Putri S." },
  { text: "Kerjaan bersih, rapi, dan mudah dipahami.", author: "Arif D." },
  { text: "Pelayanan prima dari awal hingga selesai.", author: "Mega T." },
  { text: "Sangat profesional dalam handling project.", author: "Dimas P." },
  { text: "Hasil kerja original dan bebas plagiarisme.", author: "Vina L." },
  { text: "Support yang luar biasa, sangat recommended!", author: "Eko W." },
  { text: "Kualitas kerja konsisten dan dapat diandalkan.", author: "Tari N." },
  { text: "Proses revisi mudah dan tidak ribet.", author: "Gilang M." },
  { text: "Tim yang sangat memahami kebutuhan klien.", author: "Sinta K." },
  { text: "Hasil kerja detail dan sesuai standar akademik.", author: "Rendi F." },
  { text: "Pelayanan yang sangat memuaskan dan terpercaya.", author: "Ayu P." },
  { text: "Kerjasama yang profesional dan hasil berkualitas.", author: "Wahyu S." },
  { text: "Sangat membantu dalam mengejar deadline ketat.", author: "Lia R." },
  { text: "Tim yang responsif dan selalu siap membantu.", author: "Dedi A." },
  { text: "Kualitas premium dengan harga yang reasonable.", author: "Novi C." },
  { text: "Hasil kerja memuaskan dan sesuai brief.", author: "Irfan B." },
  { text: "Pelayanan 24 jam sangat membantu mahasiswa.", author: "Ratna M." },
  { text: "Proses pengerjaan cepat tanpa mengurangi kualitas.", author: "Fikri L." },
  { text: "Tim yang sangat sabar dan detail oriented.", author: "Yuni S." },
  { text: "Hasil kerja original dan sesuai kaidah ilmiah.", author: "Adi K." },
  { text: "Sangat puas dengan layanan dan hasilnya.", author: "Diah P." },
  { text: "Komunikasi yang baik dan transparan.", author: "Reza W." },
  { text: "Kerjaan cepat, rapi, dan harga bersahabat.", author: "Fitri N." },
  { text: "Tim yang sangat profesional dan terpercaya.", author: "Joko S." },
  { text: "Hasil melampaui ekspektasi, akan recommend ke teman.", author: "Siska R." },
  { text: "Pelayanan prima dan hasil kerja berkualitas tinggi.", author: "Bambang L." },
  { text: "Sangat membantu dalam penyelesaian thesis.", author: "Erni M." },
  { text: "Kualitas konsisten dan dapat diandalkan.", author: "Fajar A." },
  { text: "Tim yang sangat memahami standar akademik.", author: "Wulan K." },
  { text: "Hasil kerja detail dan sesuai dengan permintaan.", author: "Ridwan P." },
]

// DOM Elements
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const header = document.getElementById("header")
const testimonialContainer = document.getElementById("testimonial-container")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const orderForm = document.getElementById("order-form")
const loadingOverlay = document.getElementById("loading-overlay")

// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingOverlay.classList.add("hidden")
  }, 1500)
})

// Mobile menu toggle with smooth animation
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")

  // Animate hamburger lines
  const spans = hamburger.querySelectorAll("span")
  if (hamburger.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")

    // Reset hamburger animation
    const spans = hamburger.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Enhanced sticky header with smooth transition
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  // Hide/show header on scroll
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    header.style.transform = "translateY(-100%)"
  } else {
    header.style.transform = "translateY(0)"
  }
  lastScrollTop = scrollTop
})

// Generate testimonial cards with enhanced animation
function generateTestimonials() {
  testimonialContainer.innerHTML = ""
  testimonials.forEach((testimonial, index) => {
    const card = document.createElement("div")
    card.className = "testimonial-card"
    card.innerHTML = `
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p class="testimonial-author">–– ${testimonial.author}</p>
    `
    testimonialContainer.appendChild(card)
  })
}

// Enhanced testimonial slider with smooth transitions
let currentTestimonial = 0
let isTransitioning = false

function showTestimonial(index) {
  if (isTransitioning) return
  isTransitioning = true

  const translateX = -index * 100
  testimonialContainer.style.transform = `translateX(${translateX}%)`

  setTimeout(() => {
    isTransitioning = false
  }, 600)
}

function nextTestimonial() {
  if (isTransitioning) return
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  showTestimonial(currentTestimonial)
}

function prevTestimonial() {
  if (isTransitioning) return
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
  showTestimonial(currentTestimonial)
}

// Event listeners for testimonial slider with enhanced feedback
nextBtn.addEventListener("click", () => {
  nextBtn.style.transform = "scale(0.9)"
  setTimeout(() => {
    nextBtn.style.transform = "scale(1)"
  }, 150)
  nextTestimonial()
})

prevBtn.addEventListener("click", () => {
  prevBtn.style.transform = "scale(0.9)"
  setTimeout(() => {
    prevBtn.style.transform = "scale(1)"
  }, 150)
  prevTestimonial()
})

// Auto-play testimonials with pause on hover
let autoPlayInterval = setInterval(nextTestimonial, 6000)

document.querySelector(".testimonial-slider").addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval)
})

document.querySelector(".testimonial-slider").addEventListener("mouseleave", () => {
  autoPlayInterval = setInterval(nextTestimonial, 6000)
})

// Enhanced form submission with loading state
orderForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const submitBtn = orderForm.querySelector(".glow-btn")
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...'
  submitBtn.disabled = true

  const formData = new FormData(orderForm)
  const nama = formData.get("nama")
  const layanan = formData.get("layanan-pilihan")
  const kontak = formData.get("kontak")
  const deskripsi = formData.get("deskripsi") || "Tidak ada deskripsi tambahan"

  // Create enhanced WhatsApp message
  const message = `🎓 *HAIKAL ACADEMIC SERVICES*

Halo, saya ingin menggunakan layanan Anda:

👤 *Nama:* ${nama}
📋 *Layanan:* ${layanan}
📱 *Nomor Kontak:* ${kontak}
📝 *Deskripsi:* ${deskripsi}

Mohon informasi lebih lanjut mengenai proses dan biaya. Terima kasih! 🙏`

  // Simulate processing time
  setTimeout(() => {
    const whatsappUrl = `https://wa.me/6285135891242?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form and button
    orderForm.reset()
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false

    // Show success feedback
    showNotification("Berhasil! Anda akan diarahkan ke WhatsApp.", "success")
  }, 1500)
})

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `

  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === "success" ? "rgba(0, 255, 0, 0.1)" : "rgba(0, 255, 255, 0.1)"};
    backdrop-filter: blur(20px);
    border: 1px solid ${type === "success" ? "rgba(0, 255, 0, 0.3)" : "rgba(0, 255, 255, 0.3)"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 10000;
    transform: translateX(400px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 400)
  }, 4000)
}

// Enhanced scroll reveal animation with stagger effect
function revealOnScroll() {
  const reveals = document.querySelectorAll(".service-card, .why-card")

  reveals.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 100

    if (elementTop < window.innerHeight - elementVisible) {
      setTimeout(() => {
        element.classList.add("fade-in-up")
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }, index * 100) // Stagger effect
    }
  })
}

// Smooth scroll for navigation links with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Enhanced intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        entry.target.classList.add("animate-in")
      }, index * 100)
    }
  })
}, observerOptions)

// Parallax effect for hero section
function updateParallax() {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".hero::before")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
}

// Mouse movement effect for cards
document.querySelectorAll(".service-card, .why-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
  })
})

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials()
  revealOnScroll()

  // Initialize all cards for observation
  const cards = document.querySelectorAll(".service-card, .why-card, .testimonial-card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(60px)"
    card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    observer.observe(card)
  })
})

// Event listeners
window.addEventListener("scroll", () => {
  revealOnScroll()
  updateParallax()
})

window.addEventListener("resize", () => {
  // Close mobile menu on resize
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")

    // Reset hamburger animation
    const spans = hamburger.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Add smooth cursor following effect
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor")
  if (!cursor) {
    const newCursor = document.createElement("div")
    newCursor.className = "custom-cursor"
    newCursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.1s ease;
      mix-blend-mode: difference;
    `
    document.body.appendChild(newCursor)
  }

  const cursor2 = document.querySelector(".custom-cursor")
  cursor2.style.left = e.clientX - 10 + "px"
  cursor2.style.top = e.clientY - 10 + "px"
})

// Add typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect after page load
setTimeout(() => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 50)
  }
}, 2000)

// Mobile-specific enhancements
function initMobileOptimizations() {
  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (isMobile) {
    // Add mobile class to body
    document.body.classList.add("mobile-device")

    // Optimize touch interactions
    document.addEventListener("touchstart", () => {}, { passive: true })

    // Prevent zoom on input focus
    const inputs = document.querySelectorAll("input, select, textarea")
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        const viewport = document.querySelector('meta[name="viewport"]')
        viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")
      })

      input.addEventListener("blur", () => {
        const viewport = document.querySelector('meta[name="viewport"]')
        viewport.setAttribute("content", "width=device-width, initial-scale=1.0")
      })
    })

    // Mobile-specific testimonial swipe
    let startX = 0
    let endX = 0

    const testimonialSlider = document.querySelector(".testimonial-slider")

    testimonialSlider.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
      },
      { passive: true },
    )

    testimonialSlider.addEventListener(
      "touchend",
      (e) => {
        endX = e.changedTouches[0].clientX
        handleSwipe()
      },
      { passive: true },
    )

    function handleSwipe() {
      const threshold = 50
      const diff = startX - endX

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          nextTestimonial()
        } else {
          prevTestimonial()
        }
      }
    }

    // Optimize scroll performance on mobile
    let ticking = false

    function updateOnScroll() {
      revealOnScroll()
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false
        })
        ticking = true
      }
    }

    window.removeEventListener("scroll", revealOnScroll)
    window.addEventListener("scroll", updateOnScroll, { passive: true })

    // Mobile navigation improvements
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("touchend", function (e) {
        // Add visual feedback for touch
        this.style.transform = "scale(0.95)"
        setTimeout(() => {
          this.style.transform = "scale(1)"
        }, 150)
      })
    })

    // Improve mobile form experience
    const formInputs = document.querySelectorAll(".form-group input, .form-group select, .form-group textarea")
    formInputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("focused")

        // Scroll input into view on mobile
        setTimeout(() => {
          this.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 300)
      })

      input.addEventListener("blur", function () {
        this.parentElement.classList.remove("focused")
      })
    })
  }

  // Viewport height fix for mobile browsers
  function setVH() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  setVH()
  window.addEventListener("resize", setVH)
  window.addEventListener("orientationchange", () => {
    setTimeout(setVH, 100)
  })
}

// Enhanced mobile menu animation
function enhanceMobileMenu() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  hamburger.addEventListener("click", () => {
    const isActive = navMenu.classList.contains("active")

    if (!isActive) {
      // Opening animation
      navMenu.classList.add("active")
      document.body.style.overflow = "hidden"

      // Animate menu items
      const menuItems = navMenu.querySelectorAll("li")
      menuItems.forEach((item, index) => {
        item.style.opacity = "0"
        item.style.transform = "translateY(30px)"

        setTimeout(
          () => {
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
          },
          100 + index * 100,
        )
      })
    } else {
      // Closing animation
      const menuItems = navMenu.querySelectorAll("li")
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "0"
          item.style.transform = "translateY(-30px)"
        }, index * 50)
      })

      setTimeout(
        () => {
          navMenu.classList.remove("active")
          document.body.style.overflow = "auto"
        },
        menuItems.length * 50 + 200,
      )
    }
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      if (navMenu.classList.contains("active")) {
        hamburger.click()
      }
    }
  })
}

// Mobile-optimized loading screen
function optimizeLoadingForMobile() {
  const isMobile = window.innerWidth <= 768

  if (isMobile) {
    // Faster loading on mobile
    setTimeout(() => {
      loadingOverlay.classList.add("hidden")
    }, 1000)
  }
}

// Initialize mobile optimizations
document.addEventListener("DOMContentLoaded", () => {
  initMobileOptimizations()
  enhanceMobileMenu()
  optimizeLoadingForMobile()
})

// Mobile-specific notification positioning
function showMobileNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `

  // Mobile-optimized notification styles
  const isMobile = window.innerWidth <= 768
  notification.style.cssText = `
    position: fixed;
    top: ${isMobile ? "90px" : "100px"};
    right: ${isMobile ? "10px" : "20px"};
    left: ${isMobile ? "10px" : "auto"};
    background: ${type === "success" ? "rgba(0, 255, 0, 0.1)" : "rgba(0, 255, 255, 0.1)"};
    backdrop-filter: blur(20px);
    border: 1px solid ${type === "success" ? "rgba(0, 255, 0, 0.3)" : "rgba(0, 255, 255, 0.3)"};
    color: white;
    padding: ${isMobile ? "0.8rem 1rem" : "1rem 1.5rem"};
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 10000;
    transform: translateY(-100px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: ${isMobile ? "0.9rem" : "1rem"};
    max-width: ${isMobile ? "calc(100vw - 20px)" : "auto"};
    box-sizing: border-box;
  `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateY(0)"
  }, 100)

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = "translateY(-100px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 400)
  }, 4000)
}

// Override the original showNotification for mobile
if (window.innerWidth <= 768) {
  window.showNotification = showMobileNotification
}
