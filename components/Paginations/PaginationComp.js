import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComp() {
  return (
    <> 
      <div className='pagination'>
       <Stack spacing={2} >
      <Pagination count={10} />
    </Stack>
    </div>
    </>

  );
}1