import * as React from 'react';
import './style.css';
import liff from '@line/liff';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const HistoryPage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #FFFFFF',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginLeft: '0vw' }}>
      <div style={{ margin: '5vw' }}>
        <h1>ประวัติ</h1>
        <p>ประวัติการชำระเงิน</p>
        <Box
          sx={{
            flexGrow: 1,
            border: 0,
            backgroundColor: '#D3D3D3',
            mb: 2,
            mt: 6,
            pb: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              Signal
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              Package
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              ราคา(บาท)
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              วัน-เวลาที่ชำระ
            </Grid>
            <Grid item xs={2} sx={{ textAlign: 'center', padding: 2 }}></Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            border: 0,
            backgroundColor: 'white',
            mb: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              M4
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              15 วัน แถม 3
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              353.00
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              2023/01/05 22:20:12
            </Grid>
            <Grid item xs={2} sx={{ textAlign: 'center', padding: 2 }}>
              <SearchSharpIcon
                sx={{ cursor: 'pointer' }}
                onClick={handleOpen}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            border: 0,
            backgroundColor: 'white',
            mb: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              M4
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              20 วัน แถม 5
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              547.00
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'center', fontSize: 12 }}>
              2023/02/02 12:30:36
            </Grid>
            <Grid item xs={2} sx={{ textAlign: 'center', padding: 2 }}>
              <SearchSharpIcon
                sx={{ cursor: 'pointer' }}
                onClick={handleOpen}
              />
            </Grid>
          </Grid>
        </Box>
        <div className="iBannerFix">
          <button className="iBack">กลับ</button>
          <button className="iNext">ต่อไป</button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="mySuccess">รายละเอียด</h1>

          <Box
            sx={{
              flexGrow: 1,
              border: 0,
              backgroundColor: 'white',
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={5.5}
                sx={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}
              >
                วัน-เวลาที่ชำระ
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center', fontSize: 12 }}>
                :
              </Grid>
              <Grid item xs={5.5} sx={{ textAlign: 'left', fontSize: 12 }}>
                2023/1/5 22:20:12 น.
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              border: 0,
              backgroundColor: 'white',
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={5.5}
                sx={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}
              >
                Signal
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center', fontSize: 12 }}>
                :
              </Grid>
              <Grid item xs={5.5} sx={{ textAlign: 'left', fontSize: 12 }}>
                M4
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              border: 0,
              backgroundColor: 'white',
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={5.5}
                sx={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}
              >
                วัน-เวลาที่ชำระ
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center', fontSize: 12 }}>
                :
              </Grid>
              <Grid item xs={5.5} sx={{ textAlign: 'left', fontSize: 12 }}>
                15 วันแถม 3
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              border: 0,
              backgroundColor: 'white',
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={5.5}
                sx={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}
              >
                Package
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center', fontSize: 12 }}>
                :
              </Grid>
              <Grid item xs={5.5} sx={{ textAlign: 'left', fontSize: 12 }}>
                353.00 บาท
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              border: 0,
              backgroundColor: 'white',
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={5.5}
                sx={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}
              >
                เริ่มใช้งานทันที
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center', fontSize: 12 }}>
                :
              </Grid>
              <Grid item xs={5.5} sx={{ textAlign: 'left', fontSize: 12 }}>
                2023/01/05 22:20:12
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              border: 0,
              backgroundColor: 'white',
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={5.5}
                sx={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}
              >
                สิ้นสุด
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center', fontSize: 12 }}>
                :
              </Grid>
              <Grid item xs={5.5} sx={{ textAlign: 'left', fontSize: 12 }}>
                2023/01/22 23:59:59 น.
              </Grid>
            </Grid>
          </Box>
          <div className="iBannerFix2">
            <button
              className="iBack2"
              onClick={() => {
                handleClose();
              }}
            >
              ปิด
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default HistoryPage;

// วัน-เวลาที่ชำระ : 2023/1/5 22:20:12
// Signal : M4
// Package : 15 วันแถม 3
// ราคา(บาท) : 353.00
// เริ่มใช้งานทันที : 2023/01/05 22:20:12
// สิ้นสุด : 2023/01/22 23:59:59
