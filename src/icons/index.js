export const strokedIcon = {
  paths: {
    name: "svg",
    attrs: {
      "viewBox": "0 0 64 64"
    },
    childs: [
      {
        name: "g",
        attrs: {
          stroke: "#202020",
          fill: "none",
        },
        childs: [
          {
            name: "path",
            attrs: {
              strokeWidth: 1,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: "M25.9 49.3c1.9.5 4 .7 6.1.7 17.2 0 29.5-17.5 29.5-17.5s-3.5-5-9.5-9.7M45.5 18.5c-4-2-8.5-3.5-13.5-3.5C14.8 15 2.5 32.5 2.5 32.5S8.4 41 17.9 46.1M32 42c5.5 0 10-4.5 10-10"
            }
          },
          {
            name: "path",
            attrs: {
              strokeWidth: 1,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: "M39.1 24.9C37.3 23.1 34.8 22 32 22c-5.5 0-10 4.5-10 10 0 2.8 1.1 5.2 2.9 7.1M62 2L2 62"
            }
          }
        ]
      }
    ]
  },
  style: 'stroke',
};

export const filledIcon = {
  paths: {
    name: "svg",
    attrs: {
      viewBox: "0 0 64 64"
    },
    childs: [
      {
        name: "g",
        attrs: {},
        childs: [
          {
            name: "path",
            attrs: {
              id: "color-1",
              d: "M50 0H0v50h10V10h40z",
              fill: "#202020",
            }
          },
          {
            name: "path",
            attrs: {
              id: "color-2",
              d: "M14 14v50h50V14H14zm38 27H41v11c0 1.1-.9 2-2 2s-2-.9-2-2V41H26c-1.1 0-2-.9-2-2s.9-2 2-2h11V26c0-1.1.9-2 2-2s2 .9 2 2v11h11c1.1 0 2 .9 2 2s-.9 2-2 2z",
              fill: "#202020",
            }
          }
        ]
      }
    ]
  },
  style: 'fill',
};
