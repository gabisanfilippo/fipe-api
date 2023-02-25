# Fipe-API

Fipe-API is a project composed of two screens: a form to apply filters to your search and the screen that shows the search results.

In the form screen, there are initially 2 selects. The first is the brand select, where I make a request to an adapted API of the FIPE table to bring the names of all brands. And then, when the brand is selected, only after that the second select will have data to select; it is the model select. This depends on the user selecting the brand as it only brings the models of the selected brand. When these two selects have selected data, another select appears: the car year. This select also depends on the previous selects, as it brings the year according to the selected brand and model.

At the end of the form, there is a button. It is disabled at all times and is only enabled when the user has selected an option in all 3 selects. When enabled, it redirects the user to the second page: the search results page. This page has a title containing the brand, model, and year that was chosen and the price of that filtered car.

## Technologies Used

The following technologies and tools were used in this project:

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Material-UI](https://material-ui.com/)
- [Axios](https://axios-http.com/)
- [React-Query](https://react-query.tanstack.com/)

## Getting Started

To get started with this project, run the following command:

```bash
# clone the repository
git clone https://github.com/gabisanfilippo/fipe-api.git

# enter the project directory
cd fipe-api

# install dependencies
yarn install

# start the development server
yarn dev

```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.