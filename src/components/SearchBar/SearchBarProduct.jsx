import React from 'react';
import { connect } from 'react-redux';
import { useGetCategoriesQuery } from '../../redux/apiSlice';
import Catalog from './Catalog';
import SearchInput from './SearchInput';
import Sale from './Sale';
import Slider from './Slider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SearchBar = ({ categories }) => {
  const { data: categoriesData = [], error, isLoading } = useGetCategoriesQuery();

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Item>
          <Catalog categories={categoriesData} />
        </Item>
      </Grid>
      <Grid item xs={9}>
        <Item>
          <SearchInput />
        </Item>
        <Item>
          <Sale />
        </Item>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(SearchBar); 
