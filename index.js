def mainth(email):
    try:
        if mail_option == 1:
            email = random_mail_from_user(email)

        session = Session()
        session.headers.update({'user-agent': random_useragent(), 'accept': 'application/json, text/plain, */*', 'accept-language': 'ru,en;q=0.9,vi;q=0.8,es;q=0.7', 'content-type' : 'application/json', 'origin': 'https://www.getverse.com', 'referer': 'https://www.getverse.com/'})


        if use_proxy in ('y', 'Y'):
            if proxy_source == 1:
                proxy_str = random_proxy(proxy_folder)
                session.proxies.update({'http': f'{proxy_type}://{proxy_str}', 'https': f'{proxy_type}://{proxy_str}'})
            else:
                session.proxies.update(random_tor_proxy())


        r = session.post('https://activecampaign.prod.cloud.bitcoin.com/', json = {"segment":"149","email":email})


        if str(r.text) != '{"success":1}':
            raise Exception('wrong_response')
