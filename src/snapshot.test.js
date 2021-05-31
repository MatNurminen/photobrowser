import renderer from "react-test-renderer";
import ImageDetails from "./components/imageDetails";
import faker from "faker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

it("imageDetails has launched", () => {
  const imageId = faker.datatype.number({ min: 1, max: 100 });
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <ImageDetails
            image={{
              title: faker.name.findName(),
              url: faker.image.imageUrl(),
              id: imageId,
              albumId: faker.datatype.number({ min: 1, max: 100 }),
            }}
            match={{
              params: {
                id: imageId,
              },
            }}
            getImage={(id) => expect(id).toBe(imageId)}
          />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="makeStyles-root-4"
    >
      <div
        className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"
      >
        <div
          className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
        >
          <div
            className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
            role="progressbar"
            style={
              Object {
                "height": 40,
                "width": 40,
              }
            }
          >
            <svg
              className="MuiCircularProgress-svg"
              viewBox="22 22 44 44"
            >
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                cx={44}
                cy={44}
                fill="none"
                r={20.2}
                strokeWidth={3.6}
                style={Object {}}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  `);
});
