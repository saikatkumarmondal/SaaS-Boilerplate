'use client';

import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function PageSettings() {
  const [formData, setFormData] = useState({
    aboutPage: '',
    postTypes: [],
    postingTimes: [],
  });
  const [hasInteraction, setHasInteraction] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const postTypeOptions = ['Benefit', 'Alert', 'Tips'];

  // Generate time slots with AM/PM format
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    if (i === 0) {
      return '12 am';
    }
    if (i < 12) {
      return `${i} am`;
    }
    if (i === 12) {
      return '12 pm';
    }
    return `${i - 12} pm`;
  });

  useEffect(() => {
    if (formData.aboutPage || formData.postTypes.length > 0 || formData.postingTimes.length > 0) {
      setHasInteraction(true);
    }
  }, [formData]);

  const handlePostTypeToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      postTypes: prev.postTypes.includes(type)
        ? prev.postTypes.filter(t => t !== type)
        : [...prev.postTypes, type],
    }));
  };

  const handleTimeToggle = (time) => {
    setFormData(prev => ({
      ...prev,
      postingTimes: prev.postingTimes.includes(time)
        ? prev.postingTimes.filter(t => t !== time)
        : [...prev.postingTimes, time],
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      console.log('Saved data:', formData);
      alert('Form saved successfully!');
      setIsSaving(false);
      setHasInteraction(false);
    }, 500);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
        {/* Header */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 4, py: 3 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              whiteSpace: { xs: 'normal', md: 'nowrap' },
            }}
          >
            Automate your Facebook - Accelerate Business promotion
          </Typography>
        </Box>

        <Box sx={{ px: 4, py: 4 }}>
          {/* About Your Facebook Page */}
          {/* About Your Facebook Page */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              About Your Facebook Page
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={formData.aboutPage}
              onChange={e => setFormData(prev => ({ ...prev, aboutPage: e.target.value }))}
              onFocus={() => setHasInteraction(true)}
              label="Describe your Facebook page, target audience, and content strategy..."
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Box>

          {/* Post Types */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Post Types
              <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                (Optional)
              </Typography>
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
              Select one or more post types for your content strategy
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              {postTypeOptions.map(type => (
                <Chip
                  key={type}
                  label={type}
                  onClick={() => handlePostTypeToggle(type)}
                  color={formData.postTypes.includes(type) ? 'primary' : 'default'}
                  variant={formData.postTypes.includes(type) ? 'filled' : 'outlined'}
                  sx={{
                    px: 1,
                    fontWeight: formData.postTypes.includes(type) ? 600 : 400,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Posting Time */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Posting Time
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
              Select preferred time slots for posting content
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {timeSlots.map(time => (
                <Chip
                  key={time}
                  label={time}
                  onClick={() => handleTimeToggle(time)}
                  color={formData.postingTimes.includes(time) ? 'primary' : 'default'}
                  variant={formData.postingTimes.includes(time) ? 'filled' : 'outlined'}
                  size="small"
                  sx={{
                    minWidth: 50,
                    fontWeight: formData.postingTimes.includes(time) ? 600 : 400,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Footer with Save Button */}
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            px: 4,
            py: 2.5,
            bgcolor: 'grey.50',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={isSaving}
            sx={{
              'px': 3,
              'py': 1,
              'fontWeight': 600,
              'textTransform': 'none',
              'boxShadow': hasInteraction && !isSaving ? 3 : 1,
              'animation': hasInteraction && !isSaving ? 'pulse 2s infinite' : 'none',
              '@keyframes pulse': {
                '0%, 100%': {
                  boxShadow: '0 0 0 0 rgba(25, 118, 210, 0.4)',
                },
                '50%': {
                  boxShadow: '0 0 0 8px rgba(25, 118, 210, 0)',
                },
              },
              '&:hover': {
                transform: hasInteraction && !isSaving ? 'translateY(-2px)' : 'none',
                boxShadow: hasInteraction && !isSaving ? 6 : 1,
              },
              'transition': 'all 0.3s ease',
              'bgcolor': hasInteraction ? 'primary.main' : 'grey.300',
              '&:disabled': {
                bgcolor: 'primary.main',
                opacity: 0.7,
              },
            }}
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
