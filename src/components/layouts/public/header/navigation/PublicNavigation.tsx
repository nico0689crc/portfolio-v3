import { Box, List, ListItem, Typography } from "@mui/material";

const PublicNavigation = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto'
    }}
  >
    <List
      component="nav"
      sx={{ 
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItem
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          My Website
        </Typography>
      </ListItem>
      <ListItem
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
      <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          My Website 2
        </Typography>
      </ListItem>
    </List>
  </Box>
)
export default PublicNavigation;