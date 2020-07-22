export interface ULResponse {
    flight_number:           number;
    mission_name:            string;
    mission_id:              any[];
    launch_year:             string;
    launch_date_unix:        number;
    launch_date_utc:         string;
    launch_date_local:       string;
    is_tentative:            boolean;
    tentative_max_precision: string;
    tbd:                     boolean;
    launch_window:           null;
    rocket:                  Rocket;
    ships:                   string[];
    telemetry:               Telemetry;
    launch_site:             LaunchSite;
    launch_success:          null;
    links:                   Links;
    details:                 string;
    upcoming:                boolean;
    static_fire_date_utc:    string;
    static_fire_date_unix:   number;
    timeline:                null;
    crew:                    null;
    last_date_update:        string;
    last_ll_launch_date:     null;
    last_ll_update:          null;
    last_wiki_launch_date:   string;
    last_wiki_revision:      string;
    last_wiki_update:        string;
    launch_date_source:      string;
}

export interface LaunchSite {
    site_id:        string;
    site_name:      string;
    site_name_long: string;
}

export interface Links {
    mission_patch:       string;
    mission_patch_small: string;
    reddit_campaign:     string;
    reddit_launch:       string;
    reddit_recovery:     null;
    reddit_media:        string;
    presskit:            null;
    article_link:        null;
    wikipedia:           string;
    video_link:          string;
    youtube_id:          string;
    flickr_images:       any[];
}

export interface Rocket {
    rocket_id:    string;
    rocket_name:  string;
    rocket_type:  string;
    first_stage:  FirstStage;
    second_stage: SecondStage;
    fairings:     Fairings;
}

export interface Fairings {
    reused:           null;
    recovery_attempt: boolean;
    recovered:        null;
    ship:             string;
}

export interface FirstStage {
    cores: Core[];
}

export interface Core {
    core_serial:     string;
    flight:          number;
    block:           number;
    gridfins:        boolean;
    legs:            boolean;
    reused:          boolean;
    land_success:    null;
    landing_intent:  boolean;
    landing_type:    string;
    landing_vehicle: string;
}

export interface SecondStage {
    block:    number;
    payloads: Payload[];
}

export interface Payload {
    payload_id:       string;
    norad_id:         any[];
    reused:           boolean;
    customers:        string[];
    nationality:      string;
    manufacturer:     string;
    payload_type:     string;
    payload_mass_kg:  number;
    payload_mass_lbs: number;
    orbit:            string;
    orbit_params:     { [key: string]: null | string };
}

export interface Telemetry {
    flight_club: null;
}
