import React from 'react';
import { connect } from 'react-redux'; // Импортируем connect из react-redux
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
  // Используем хук useGetCategoriesQuery для получения категорий товаров
  const { data: categoriesData = [], error, isLoading } = useGetCategoriesQuery();

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Item>
          {/* Передаем полученные категории в компонент Catalog */}
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
        <Item>
          <Slider />
        </Item>
      </Grid>
    </Grid>
  );
};

// Функция mapStateToProps для получения данных из Redux-стора и передачи их в компонент
const mapStateToProps = (state) => {
  return {
    categories: state.categories, // Предположим, что категории хранятся в Redux-сторе в свойстве categories
  };
};

export default connect(mapStateToProps)(SearchBar); // Оборачиваем компонент в connect и передаем mapStateToProps
