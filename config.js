module.exports = {
  title: 'example',
  display_title: 'example',
  SERVER_ROOT: 'http://localhost:4040',
  EVENTS_EXT: '/api/timemap_data/export_events/deeprows',
  ASSOCIATIONS_EXT: '/api/timemap_data/export_associations/deeprows',
  SOURCES_EXT: '/api/timemap_data/export_sources/deepids',
  SITES_EXT: '',
  SHAPES_EXT: '',
  DATE_FMT: 'MM/DD/YYYY',
  TIME_FMT: 'hh:mm',
  store: {
    app: {
      map: {
        anchor: [8.130912119045295, -66.63830778451526]
      }
    },
    features: {
      COLOR_BY_ASSOCIATION: true,
      USE_ASSOCIATIONS: true,
      USE_FULLSCREEN: true,
      USE_SOURCES: true,
      USE_COVER: true,
      GRAPH_NONLOCATED: false,
      HIGHLIGHT_GROUPS: false
    }
  }
}
