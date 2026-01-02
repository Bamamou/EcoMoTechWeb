import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import {
  Share2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  X,
} from 'lucide-react'

interface SocialLink {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  hoverColor: string
  url: string
  ariaLabel: string
}

export const SocialShareButton = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [clickedId, setClickedId] = useState<string | null>(null)

  const socialLinks: SocialLink[] = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <Icon icon="logos:whatsapp-icon" className="w-5 h-5" />,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      url: 'https://wa.me/8618810799128',
      ariaLabel: 'Chat with us on WhatsApp',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <Facebook size={20} />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      url: 'https://www.facebook.com/people/Ecomotech/61574949172407/',
      ariaLabel: 'Follow us on Facebook',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram size={20} />,
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      url: 'https://www.instagram.com/ecomotech.online/',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
      url: 'https://www.linkedin.com/company/ecomotech/',
      ariaLabel: 'Follow us on LinkedIn',
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      icon: <X size={20} />,
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      url: 'https://x.com/ecomotech',
      ariaLabel: 'Follow us on X (Twitter)',
    },
    {
      id: 'email',
      name: 'Email',
      icon: <Mail size={20} />,
      color: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      url: '/contact',
      ariaLabel: 'Contact us via Email',
    },
  ]

  const handleSocialClick = (link: SocialLink) => {
    setClickedId(link.id)
    
    // Handle different link types
    if (link.id === 'email') {
      // Navigate to contact page for email
      navigate('/contact')
    } else {
      // For social media, only open in a new window
      try {
        window.open(link.url, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error('Error opening social media link:', error)
      }
    }
    
    // Close menu after a delay
    setTimeout(() => {
      setIsOpen(false)
      setClickedId(null)
    }, 500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0, opacity: 0, y: 10 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: 10,
    },
    hover: {
      scale: 1.15,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    },
  }

  const buttonVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  }

  const mainButtonVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 10 },
    tap: { scale: 0.9 },
  }

  const floatingVariants = {
    float: {
      y: [-8, 8, -8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.id}
                variants={itemVariants}
                className="flex items-center gap-3 group"
              >
                {/* Animated Label Background - Also Clickable */}
                <motion.button
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: 10, width: 0 }}
                  transition={{ delay: 0.05 + index * 0.04 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleSocialClick(link)
                  }}
                  aria-label={link.ariaLabel}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-gray-700 hover:from-gray-700 hover:to-gray-800 cursor-pointer z-40 relative pointer-events-auto"
                >
                  {link.name}
                </motion.button>

                {/* Icon Button - Simple interactive button */}
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleSocialClick(link)
                  }}
                  aria-label={link.ariaLabel}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative ${link.color} ${link.hoverColor} transition-colors w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform origin-center cursor-pointer z-40 social-button pointer-events-auto`}
                >
                  {/* Click ripple effect */}
                  {clickedId === link.id && (
                    <motion.div
                      className={`absolute inset-0 rounded-full ${link.color}`}
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 pointer-events-none">
                    {link.icon}
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button with Float Animation */}
      <motion.div
        variants={floatingVariants}
        animate={!isOpen ? 'float' : 'rest'}
        className="relative"
      >
        {/* Outer glow rings */}
        <AnimatePresence>
          {!isOpen && (
            <>
              {/* Ring 1 - Outer */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 pointer-events-none"
                animate={{
                  scale: [1, 1.3, 1.5],
                  opacity: [0.6, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Ring 2 - Middle */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 pointer-events-none"
                animate={{
                  scale: [1, 1.3, 1.5],
                  opacity: [0.4, 0.2, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.3,
                }}
              />
            </>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close social share menu' : 'Open social share menu'}
          className="relative w-14 h-14 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 overflow-hidden group cursor-pointer z-40 pointer-events-auto"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 pointer-events-none"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Pulsing glow background */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full opacity-30 pointer-events-none"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}

          {/* Icon with rotation */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            className="relative z-10 pointer-events-none"
          >
            <Share2 size={24} />
          </motion.div>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 pointer-events-none"
            animate={isOpen ? { opacity: 0 } : { opacity: [0, 0.2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      </motion.div>

      {/* Backdrop to close menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default SocialShareButton
