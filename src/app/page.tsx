import * as React from 'react';
import Image from 'next/image'
import { Shrikhand } from 'next/font/google';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Home</div>
    </main>
  )
}
