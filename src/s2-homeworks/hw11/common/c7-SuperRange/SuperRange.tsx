import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ color: '#00CC22',
            width: 147,
            '& .MuiSlider-rail': {
                backgroundColor: '#8B8B8B',
                
            },
            '& .MuiSlider-thumb': {
                size: '18px',
                color: '#00CC22',
                border: '1px solid #00CC22',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 6,
                    height: 6,
                    border: '5px solid white',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -1, // За ползунком
                }
              }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
