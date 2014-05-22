from entities.reports import entity as reports

settings = {
    'MONGO_DBNAME': 'citizendesk',

    'SERVER_NAME': '127.0.0.1:5000',
    'DOMAIN': {
        'reports': reports,
    }
}