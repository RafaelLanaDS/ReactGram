import styles from './Profile.module.css'

import {uploads} from '../../utils/config'

//components
import Message from '../../components/Message'
import { Link } from 'react-router-dom'
import {BsFillEyeFill, BsPencilFill, BsXLg} from 'react-icons/bs'

//hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// Redux
import { profile, resetMessage } from '../../slices/userSlice'
import { publish } from '../../slices/photoSlice'

const Profile = () => {
  return (
    <div>
      
    </div>
  )
}

export default Profile
