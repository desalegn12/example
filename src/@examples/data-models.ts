import { DataModelList, DataModel } from "../@types/DataModel";

const dataModelPpcOpps: DataModel =   {
  "tableConfig": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.ppc_opps",
  "dataSource": "HS_PAID_OPPORTUNITIES",
  "id": "HS_PAID_OPPORTUNITIES",
  "schema": [
    {
      "defaultAggregaton": "count",
      "name": "Date",
      "format": "YYYY-MM-DD",
      "description": "Date",
      "label": "Date",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "Month",
      "format": "YYYY-MM",
      "description": "Month",
      "label": "Month",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "Week_Starting_Monday",
      "format": "YYYY-WW",
      "description": "Week_Starting_Monday",
      "label": "Week (Starting Monday)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "Week_Starting_Sunday",
      "format": "YYYY-WW",
      "description": "Week_Starting_Sunday",
      "label": "Week (Starting Sunday)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "Query",
      "description": "query",
      "label": "Query",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "URL_Slug",
      "description": "URL_Slug",
      "label": "URL Path",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "Page_Type",
      "description": "Page_Type",
      "label": "Page Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "Metric_1_Label",
      "description": "Metric_1_Label",
      "label": "Metric_1_Label",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "Metric_2_Label",
      "description": "Metric_2_Label",
      "label": "Metric_2_Label",
      "type": "string"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Paid_Clicks",
      "format": "number",
      "description": "Paid_Clicks",
      "label": "Paid Clicks",
      "source": "Google Ads",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Paid_Impressions",
      "format": "number",
      "description": "paid_impressions",
      "label": "Paid Impressions",
      "source": "Google Ads",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Paid_Conversions",
      "format": "number",
      "description": "paid_conversions",
      "label": "Paid Conversions",
      "source": "Google Ads",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Paid_Costs",
      "format": "currency",
      "description": "",
      "label": "Paid Costs",
      "source": "Google Ads",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Organic_Clicks",
      "format": "number",
      "description": "",
      "label": "Organic Clicks",
      "source": "Search Console",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Organic_Impressions",
      "format": "number",
      "description": "",
      "label": "Organic Impressions",
      "source": "Search Console",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Sessions",
      "format": "number",
      "description": "sessions",
      "label": "Organic Sessions",
      "source": "Google Analytics",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Metric_1",
      "format": "number",
      "description": "metric_1",
      "label": "Organic Metric 1",
      "source": "Google Analytics",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "Metric_2",
      "format": "number",
      "description": "metric_2",
      "label": "Organic Metric 2",
      "source": "Google Analytics",
      "type": "number"
    }
  ]
}

const dataModelGsc: DataModel =   {
  "dataSource": "GSC",
  "id": "GSC",
  "tableConfig": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
  "schema": [
    {
      "defaultAggregaton": "count",
      "name": "date",
      "format": "YYYY-MM-DD",
      "description": "Date",
      "label": "Date",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_month",
      "format": "YYYY-MM-DD",
      "description": "da_month",
      "label": "Month",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_week_starts_on_monday",
      "format": "YYYY-MM-DD",
      "description": "da_week_starts_on_monday",
      "label": "Week (Starting Monday)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_week_starts_on_sunday",
      "format": "YYYY-MM-DD",
      "description": "da_week_starts_on_sunday",
      "label": "Week (Starting Sunday)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_quarter",
      "format": "YYYY-MM-DD",
      "description": "da_quarter",
      "label": "Quarter",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "Page",
      "description": "full url",
      "label": "URL",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "url_slug",
      "description": "path",
      "label": "URL Path",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "query",
      "description": "query",
      "label": "Query",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "b_vs_nb",
      "description": "brand vs non brand",
      "label": "Brand vs Non-Brand",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "page_type",
      "description": "page_type",
      "label": "Page Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "sub_type",
      "description": "sub_type",
      "label": "Sub Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "miscType",
      "description": "miscType",
      "label": "Misc Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "data_type",
      "description": "domain, page or page & query",
      "label": "Data Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "search_type",
      "description": "e.g., web, image, video, etc.",
      "label": "Search Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "sum",
      "name": "clicks",
      "format": "number",
      "description": "Clicks",
      "label": "Clicks",
      "source": "GSC",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "impressions",
      "format": "number",
      "description": "impressions",
      "label": "Impressions",
      "source": "GSC",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "clicks_365",
      "format": "number",
      "description": "clicks last year",
      "label": "Clicks (LY)",
      "source": "GSC",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "impressions_365",
      "format": "number",
      "description": "impressions last year",
      "label": "Impressions (LY)",
      "source": "GSC",
      "type": "number"
    },
  ]
}

const dataModelGa4: DataModel =     {
  "dataSource": "GA4",
  "id": "GA4",
  "tableConfig": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
  "schema": [
    {
      "defaultAggregaton": "count",
      "name": "date",
      "format": "YYYY-MM-DD",
      "description": "Date",
      "label": "Date",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "date_365",
      "format": "YYYY-MM-DD",
      "description": "Date_365",
      "label": "Date (LY)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_month",
      "format": "YYYY-MM-DD",
      "description": "da_month",
      "label": "Month",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_week_starts_on_monday",
      "format": "YYYY-MM-DD",
      "description": "da_week_starts_on_monday",
      "label": "Week (Starting Monday)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_week_starts_on_sunday",
      "format": "YYYY-MM-DD",
      "description": "da_week_starts_on_sunday",
      "label": "Week (Starting Sunday)",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "da_quarter",
      "format": "YYYY-MM-DD",
      "description": "da_quarter",
      "label": "Quarter",
      "type": "date"
    },
    {
      "defaultAggregaton": "count",
      "name": "url_slug",
      "description": "path",
      "label": "URL Path",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "device",
      "description": "device",
      "label": "Device",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "source",
      "description": "source",
      "label": "Source",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "page_type",
      "description": "page_type",
      "label": "Page Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "sub_type",
      "description": "sub_type",
      "label": "Sub Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "count",
      "name": "miscType",
      "description": "miscType",
      "label": "Misc Type",
      "type": "string"
    },
    {
      "defaultAggregaton": "sum",
      "name": "sessions",
      "format": "number",
      "description": "Sessions",
      "label": "Sessions",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "sessions_365",
      "format": "number",
      "description": "sessions last year",
      "label": "Sessions (LY)",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "engaged_sessions",
      "format": "number",
      "description": "engaged_sessions",
      "label": "Engaged Sessions",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "engaged_sessions_365",
      "format": "number",
      "description": "engaged_sessions last year",
      "label": "Engaged Sessions (LY)",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "metric_1",
      "format": "number",
      "description": "metric_1",
      "label": "Metric 1",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "metric_1_365",
      "format": "number",
      "description": "metric_1 last year",
      "label": "Metric 1 (LY)",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "metric_2",
      "format": "number",
      "description": "metric_2",
      "label": "Metric 2",
      "source": "GA4",
      "type": "number"
    },
    {
      "defaultAggregaton": "sum",
      "name": "metric_2_365",
      "format": "number",
      "description": "metric_2 last year",
      "label": "Metric 2 (LY)",
      "source": "GA4",
      "type": "number"
    },        
  ]

}

// each item in this array would be a document in the database
const dataModelDatabaseDocs: DataModelList = [dataModelPpcOpps, dataModelGsc, dataModelGa4]

export default dataModelDatabaseDocs;