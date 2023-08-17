import { Dashboard } from '../@types/Dashboard';

const holisticSearchConfig: Dashboard = {
    "id": "holistic-search",
    "tabs": [
        {
            "title": "Overview",
            "iconifyIconId": "mdi:map-marker-star-outline",
            "initialFilterPanelState": [],
            "availableFilterFields": ["Query", "B_vs_Nb", "Paid_Clicks", "Paid_Impressions", "Paid_Conversions", "Paid_Costs", "Organic_Clicks", "Organic_Impressions", "Organic_Min_Position", "Holistic_Clicks", "Holistic_Impressions"],
            "tabIndex": 0,
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy",
                "dateDimension": "Date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "metricCards",
                    "position": 0,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "metricCards",
                        "chartHeight": 400,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": [],
                        "dateAggregationFields": ["Month", "Date", "Week_Starting_Sunday", "Week_Starting_Monday"],
                        "aggregateFields": [
                            {"name": "Holistic_Clicks", "aggregation": "Sum"},
                            {"name": "Holistic_Impressions", "aggregation": "Sum"},
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Costs", "aggregation": "Sum"},
                            {"name": "Paid_Conversions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Month", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Aggregate Metrics",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Summarized metrics for analysis period. Open the hamburger menu for additional view controllers.",
                        "noDataMessage": {
                            "title": "No data available for this time period.",
                            "subheading": "Please select a different time period."
                        }
                    }
                },
                {
                    "id": "lineBar",
                    "position": 7,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "lineBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": ["Month", "Date", "Week_Starting_Sunday", "Week_Starting_Monday"],
                        "aggregateFields": [
                            {"name": "Holistic_Clicks", "aggregation": "Sum"},
                            {"name": "Holistic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Conversions", "aggregation": "Sum"},
                            {"name": "Paid_Costs", "aggregation": "Sum"},
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                            {"name": "Organic_Min_Position", "aggregation": "Avg"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "YoY Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "pie1",
                    "position": 4,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "Holistic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "pie2",
                    "position": 2,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "Holistic_Clicks", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "stackedBar",
                    "position": 3,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": ["Month", "Date", "Week_Starting_Sunday", "Week_Starting_Monday"],
                        "aggregateFields": [
                            {"name": "Holistic_Clicks", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,                        
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "stackedBar2",
                    "position": 5,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": ["Month", "Date", "Week_Starting_Sunday", "Week_Starting_Monday"],
                        "aggregateFields": [
                            {"name": "Holistic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Impressions", "aggregation": "Sum"}, 
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "grid2",
                    "position": 7,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 170,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "Holistic_Clicks", "aggregation": "Sum"},
                            {"name": "Holistic_Impressions", "aggregation": "Sum"},
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Costs", "aggregation": "Sum"},
                            {"name": "Paid_Conversions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "Paid_Clicks", "direction": "DESC"},
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand - All KPIs",
                        "includeMetricInHeading": false,
                        "helpSubheading": "No additional information about this view is available at this time.",
                    }
                },
                {
                    "id": "grid",
                    "position": 8,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 700,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["Query", "B_vs_Nb"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "Holistic_Clicks", "aggregation": "Sum"},
                            {"name": "Holistic_Impressions", "aggregation": "Sum"},
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Costs", "aggregation": "Sum"},
                            {"name": "Paid_Conversions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "Paid_Clicks", "direction": "DESC"},
                            {"name": "Organic_Clicks", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Query Targets - All KPIs",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Explore query-level data for the analysis period.",
                    }
                },
            ],
        },
        {
            "title": "SEO Opportunities",
            "iconifyIconId": "mdi:card-search",
            "initialFilterPanelState": [
                { "colType": "metric", "id": 0, "value": "0", "columnField": "Organic_Clicks", "operatorValue": "equals" },
                { "colType": "metric", "id": 1, "value": "0", "columnField": "Paid_Conversions", "operatorValue": "isGreaterThan" }
            ],        
            "availableFilterFields": ["Query", "B_vs_Nb", "Paid_Clicks", "Paid_Impressions", "Paid_Conversions", "Paid_Costs", "Organic_Clicks", "Organic_Impressions"],
            "tabIndex": 1,  
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy",
                "dateDimension": "Date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "metricCards",
                    "position": 0,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "metricCards",
                        "chartHeight": 200,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": [],
                        "dateAggregationFields": ["Month", "Date", "Week_Starting_Sunday", "Week_Starting_Monday"],
                        "aggregateFields": [
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Costs", "aggregation": "Sum"},
                            {"name": "Paid_Conversions", "aggregation": "Sum"},
                            
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Month", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Aggregate Metrics",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Summarized metrics for analysis period. Open the hamburger menu for additional view controllers.",
                        "noDataMessage": {
                            "title": "No data available for this time period.",
                            "subheading": "Please select a different time period."
                        }
                    }
                },
                {
                    "id": "pie",
                    "position": 1,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"}, 
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "stackedBar",
                    "position": 2,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["B_vs_Nb"],
                        "dateAggregationFields": ["Month", "Date", "Week_Starting_Sunday", "Week_Starting_Monday"],
                        "aggregateFields": [
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"}, 
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,                        
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "ngrams",
                    "position": 3,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        // "chartType": "bubble",
                        "chartType": "ngrams",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["Query"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "Paid_Costs", "aggregation": "Sum"}, 
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"}, 
                            {"name": "Paid_Conversions", "aggregation": "Sum"}, 
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Ngram Categories",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "grid",
                    "position": 8,
                    "dataModelId": "HS_PAID_ORGANIC_QUERIES",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 700,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy", 
                        "dimensions": ["Query", "B_vs_Nb"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                            {"name": "Paid_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Conversions", "aggregation": "Sum"},
                            {"name": "Paid_Costs", "aggregation": "Sum"},
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "Paid_Clicks", "direction": "DESC"},
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Top Opportunity Queries",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Explore query-level data for the analysis period.",
                    }
                },
            ],
        },
        {
            "title": "PPC Opportunities",
            "iconifyIconId": "mdi:google-ads",
            "initialFilterPanelState": [
                { "colType": "metric", "id": 0, "value": "0", "columnField": "Paid_Clicks", "operatorValue": "equals" },
                { "colType": "metric", "id": 1, "value": "3", "columnField": "Organic_Clicks", "operatorValue": "isGreaterThan" }
            ],        
            "availableFilterFields": ["URL_Slug", "Page_Type", "Query", "Paid_Clicks", "Paid_Conversions", "Paid_Costs", "Organic_Clicks"],            
            "tabIndex": 2,  
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.paid_organic_queries_yoy",
                "dateDimension": "Date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "ngrams",
                    "position": 1,
                    "dataModelId": "HS_PAID_OPPORTUNITIES",
                    "viewSettings": {
                        "chartType": "ngrams",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.ppc_opps", 
                        "dimensions": ["Query"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "Organic_Clicks", "aggregation": "Sum"}, 
                            {"name": "Organic_Impressions", "aggregation": "Sum"}, 
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Query", "direction": "DESC"},
                        ],                        
                        "jobType": "HOLISTIC_SEARCH_PPC_CONVERTERS"
                    },
                    "labels":{
                        "title": "Keyword (Ngram) Groupings",                        
                        "includeMetricInHeading": false,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "grid",
                    "position": 8,
                    "dataModelId": "HS_PAID_OPPORTUNITIES",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 700,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.holistic_search_{{CLIENT_NAME}}.ppc_opps", 
                        "dimensions": ["URL_Slug", "Page_Type", "Query"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "Organic_Clicks", "aggregation": "Sum"},
                            {"name": "Organic_Impressions", "aggregation": "Sum"},
                            {"name": "Paid_Clicks", "aggregation": "Sum"}, 
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "Organic_Clicks", "direction": "DESC"},
                            {"name": "Organic_Impressions", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Potential Opportunity Queries",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Table includes queries that are driving Organic Clicks to pages with conversions that have 0 Paid Clicks.",
                    }
                },
            ],
        },
    ],
};


const seoPerformance: Dashboard = {
    "id": "seo-performance",
    "tabs": [
        {
            "title": "GA Universal Analytics",
            "iconifyIconId": "mdi:google-analytics",
            "initialFilterPanelState": [],
            "availableFilterFields": ["url_slug", "device" , "source", "page_type", "sub_type", "miscType"],
            "tabIndex": 0,
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.ga_{{CLIENT_NAME}}_us.ga_allcategorization",
                "dateDimension": "date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "metricCards",
                    "position": 0,
                    "dataModelId": "GAUA",
                    "viewSettings": {
                        "chartType": "metricCards",
                        "chartHeight": 200,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization", 
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "da_month", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Aggregate Metrics",
                        "helpSubheading": "Summarized metrics for analysis period.",
                    }
                },
                {
                    "id": "ngrams",
                    "position": 1,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "ngrams",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization", 
                        "dimensions": ["url_slug"],
                        "dateAggregationFields": [],                        
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "metric_1", "direction": "DESC"},
                            {"name": "metric_2", "direction": "DESC"},
                            {"name": "sessions", "direction": "DESC"},
                        ],
                        "jobType": "gaCategories"
                    },
                    "labels":{
                        "title": "URL (Ngram) Grouping Views",
                        "helpSubheading": "Ngrams are based on top 5,000 conversion driving URLs.",
                    }
                },
                {
                    "id": "lineBar",
                    "position": 7,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "lineBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "YoY Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "pie1",
                    "position": 4,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["source"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "pie2",
                    "position": 2,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["device"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "stackedBar",
                    "position": 3,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["device"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,                        
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "stackedBar2",
                    "position": 5,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["source"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "grid",
                    "position": 7,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 700,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization", 
                        "dimensions": ["url_slug", "page_type", "sub_type"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "sessions", "direction": "DESC"},
                            {"name": "metric_1", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Data Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
            ],
        },
        {
            "title": "GA4",
            "initialFilterPanelState": [],
            "iconifyIconId": "mdi:google-analytics",
            "availableFilterFields": ["url_slug", "device" , "source", "page_type", "sub_type", "miscType"],
            "tabIndex": 0,
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                "dateDimension": "date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "metricCards",
                    "position": 0,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "metricCards",
                        "chartHeight": 200,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization", 
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "da_month", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Aggregate Metrics",
                        "helpSubheading": "Summarized metrics for analysis period.",
                    }
                },
                {
                    "id": "ngrams",
                    "position": 1,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "ngrams",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization", 
                        "dimensions": ["url_slug"],
                        "dateAggregationFields": [],                        
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "metric_1", "direction": "DESC"},
                            {"name": "metric_2", "direction": "DESC"},
                            {"name": "sessions", "direction": "DESC"},
                        ],
                        "jobType": "gaCategories"
                    },
                    "labels":{
                        "title": "URL (Ngram) Grouping Views",
                        "helpSubheading": "Ngrams are based on top 5,000 conversion driving URLs.",
                    }
                },
                {
                    "id": "lineBar",
                    "position": 7,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "lineBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "YoY Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "pie1",
                    "position": 4,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["source"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "pie2",
                    "position": 2,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["device"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "stackedBar",
                    "position": 3,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["device"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "Date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,                        
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "stackedBar2",
                    "position": 5,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization",
                        "dimensions": ["source"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"},
                            {"name": "metric_1", "aggregation": "Sum"}, 
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "grid",
                    "position": 7,
                    "dataModelId": "GA4",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 700,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.ga4_{{CLIENT_NAME}}_us.ga_allcategorization", 
                        "dimensions": ["url_slug", "page_type", "sub_type"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "sessions", "aggregation": "Sum"}, 
                            {"name": "metric_1", "aggregation": "Sum"},
                            {"name": "metric_2", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "sessions", "direction": "DESC"},
                            {"name": "metric_1", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Data Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
            ],
        },
        {
            "title": "Google Search Console",
            "iconifyIconId": "mdi:google",
            "initialFilterPanelState": [],
            "availableFilterFields": ["url_slug", "query", "page_type", "sub_type", "miscType"],
            "tabIndex": 0,
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                "dateDimension": "date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "metricCards",
                    "position": 0,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "metricCards",
                        "chartHeight": 200,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Aggregate Metrics",
                        "helpSubheading": "Summarized metrics for analysis period.",
                    }
                },
                {
                    "id": "pie1",
                    "position": 1,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "stackedBar",
                    "position": 2,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,                        
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "pie2",
                    "position": 3,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "stackedBar2",
                    "position": 5,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "lineBar",
                    "position": 7,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "lineBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "YoY Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
            ],
        },
    ],
};


const googleSearchConsole: Dashboard = {
    "id": "google-search-console",
    "tabs": [
        {
            "title": "Overview",
            "iconifyIconId": "mdi:google",
            "initialFilterPanelState": [],
            "availableFilterFields": ["url_slug", "query", "page_type", "sub_type", "miscType"],
            "tabIndex": 0,
            "maxAndMinDates": {
                "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                "dateDimension": "date",
                "jobType": "MAX_AND_MIN_DATES"
            },
            "dataViews": [
                {
                    "id": "metricCards",
                    "position": 0,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "metricCards",
                        "chartHeight": 200,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Aggregate Metrics",
                        "helpSubheading": "Summarized metrics for analysis period.",
                    }
                },
                {
                    "id": "grid",
                    "position": 1,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 200,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "clicks", "direction": "DESC"},
                            {"name": "impressions", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Brand vs Non-brand Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
                {
                    "id": "pie1",
                    "position": 2,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "stackedBar",
                    "position": 3,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,                        
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "pie2",
                    "position": 4,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "pie",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 4,
                            "lg": 4,
                            "xl": 4
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": [""],
                        "aggregateFields": [
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": false,
                        "orderBy": [],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Pie",
                        "includeMetricInHeading": true,
                        "helpSubheading": "XXXXXX.",
                    }
                },
                {
                    "id": "stackedBar2",
                    "position": 5,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "stackedBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 8,
                            "lg": 8,
                            "xl": 8
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["b_vs_nb"],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Brand vs Non-Brand Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "lineBar",
                    "position": 6,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "lineBar",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": [],
                        "dateAggregationFields": ["da_month", "date", "da_week_starts_on_monday", "da_week_starts_on_sunday", "da_quarter"],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": false,
                        "limitRows": false,
                        "orderBy": [
                            {"name": "date", "direction": "DESC"},
                        ],
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "YoY Trend Analysis",
                        "includeMetricInHeading": true,
                        "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
                    }
                },
                {
                    "id": "ngrams",
                    "position": 7,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "ngrams",
                        "chartHeight": 350,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["query"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"}, 
                        ],
                        "includeLastYear": false,
                        "includeYoy": false,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "clicks", "direction": "DESC"},
                            {"name": "impressions", "direction": "DESC"},
                        ],                        
                        "jobType": "summarizedByDateAggregation"
                    },
                    "labels":{
                        "title": "Ngram Categories",
                        "includeMetricInHeading": false,
                        "helpSubheading": "Open the hamburger menu for additional view controllers.",
                    }
                },
                {
                    "id": "grid2",
                    "position": 8,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 400,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["page_type"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "clicks", "direction": "DESC"},
                            {"name": "impressions", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Page Type Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
                {
                    "id": "grid3",
                    "position": 9,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 400,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["sub_type"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "clicks", "direction": "DESC"},
                            {"name": "impressions", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Sub Type Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
                {
                    "id": "grid4",
                    "position": 10,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 400,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["url_slug", "page_type"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "clicks", "direction": "DESC"},
                            {"name": "impressions", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Pages Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
                {
                    "id": "grid5",
                    "position": 11,
                    "dataModelId": "GSC",
                    "viewSettings": {
                        "chartType": "serverGrid",
                        "chartHeight": 400,
                        "grid": {
                            "sm": 12,
                            "md": 12,
                            "lg": 12,
                            "xl": 12
                        },
                    },
                    "sql":{
                        "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
                        "dimensions": ["query", "b_vs_nb"],
                        "dateAggregationFields": [],
                        "aggregateFields": [
                            {"name": "clicks", "aggregation": "Sum"}, 
                            {"name": "impressions", "aggregation": "Sum"},
                        ],
                        "includeLastYear": true,
                        "includeYoy": true,
                        "limitRows": true,
                        "orderBy": [
                            {"name": "clicks", "direction": "DESC"},
                            {"name": "impressions", "direction": "DESC"}
                        ],
                        "jobType": "dataGrid"
                    },
                    "labels":{
                        "title": "Queries Grid",
                        "helpSubheading": "Explore ....",
                    }
                },
            ],
        },
    ],
};

// ** VIEW CONFIGS FROM TRYING TO USE "COUNT DISTINCT"
// ** HAVENT FIGURED OUT YET

// {
//     "id": "pie2",
//     "position": 1,
//     "dataModelId": "GSC",
//     "viewSettings": {
//         "chartType": "pie",
//         "chartHeight": 350,
//         "grid": {
//             "sm": 12,
//             "md": 4,
//             "lg": 4,
//             "xl": 4
//         },
//     },
//     "sql":{
//         "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization",
//         "dimensions": ["b_vs_nb"],
//         "dateAggregationFields": ["da_month"],
//         "aggregateFields": [
//             {"name": "url_slug", "aggregation": "Count", distinct: true },
//         ],
//         "includeLastYear": true,
//         "includeYoy": false,
//         "limitRows": false,
//         "orderBy": [],
//         "jobType": "countDimensionDistinctYoy"
//     },
//     "labels":{
//         "title": "Pie",
//         "includeMetricInHeading": true,
//         "helpSubheading": "XXXXXX.",
//     }
// },
// {
//     "id": "lineBar2",
//     "position": 4,
//     "dataModelId": "GSC",
//     "viewSettings": {
//         "chartType": "lineBar",
//         "chartHeight": 350,
//         "grid": {
//             "sm": 12,
//             "md": 12,
//             "lg": 12,
//             "xl": 12
//         },
//     },
//     "sql":{
//         "table": "custom-etl-data-connector.gsc_{{CLIENT_NAME}}.gsc_alldimensions_allcategorization", 
//         "dimensions": ["url_slug"],
//         "dateAggregationFields": ["da_month"],
//         "aggregateFields": [{"name": "url_slug", "aggregation": "Count", distinct: true}],
//         "includeLastYear": true,
//         "includeYoy": false,
//         "limitRows": false,
//         "orderBy": [
//             {"name": "da_month", "direction": "DESC"},
//         ],
//         "jobType": "countDimensionDistinctYoy"
//     },
//     "labels":{
//         "title": "YoY Count Distinct",
//         "includeMetricInHeading": true,
//         "helpSubheading": "Use the metric and aggregation controllers within the hamburger menu to explore available data.",
//     }
// },




const getConfigs = () => {
    // id of holisticSearchConfig is "holistic-search"
    let config = [holisticSearchConfig, seoPerformance, googleSearchConsole];
    return config;
};

export default getConfigs;

