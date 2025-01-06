import React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import useApi from '../../../../hooks/useApi';
import useUser from '../../../../hooks/useUser';

const ViewRole = () => {
  const apiInstance = useApi();
  const [getRoles] = apiInstance.endpoints.getRoles.useLazyQuery();
  const user = useUser();
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchRoles = async () => {
      const { data, error } = await getRoles(user.info.token).unwrap();
      const { roles } = data;
      setData(roles);
      setError(error);
      setIsLoading(false);
    };
    fetchRoles();
  }, []);

  console.log(data);

  return (
    <Box>
      <Typography variant="h6">Winston Roles</Typography>
      {isLoading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">Error: {error.message}</Alert>}
      <Box>
        {data?.map((role) => (
          <Chip key={role.name} label={role.name} />
        ))}
      </Box>
    </Box>
  );
};

export default ViewRole;
