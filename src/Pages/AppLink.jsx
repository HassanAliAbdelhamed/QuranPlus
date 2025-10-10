import React from 'react'
import { Box, Button, Typography, Link } from '@mui/material'

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.hassanali2.quranplus&pcampaignid=web_share'

export default function AppLink() {
  return (
    <Box sx={{ color: '#fff', textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        هذا رابط التطبيق على أندرويد
      </Typography>
      <img src="https://quranplus.vercel.app/static/media/homeIconImage.82c9fff4bfa4333d5a8c.png" style={{width: '300px',marginTop:'-50px'}} alt=""  />
      <Typography variant="body1" sx={{ mb: 2 }}>
        يمكنك فتح التطبيق من خلال متجر جوجل بلاي عبر الرابط التالي:
      </Typography>
      <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" underline="none">
      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" style={{ width: '200px' }} />
        
      </Link>
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        أو انسخ هذا الرابط: <br />
        <code style={{ color: '#fff' }}>{playStoreUrl}</code>
      </Typography>
    </Box>
  )
}
