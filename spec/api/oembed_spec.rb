require 'rails_helper'

describe "oEmbed provider", needs_phantomjs_2_bin: true do

  let(:asciicast) { create(:asciicast) }

  it "responds with status 200 for JSON" do
    get "/oembed?url=http://localhost:3000/a/#{asciicast.id}&format=json&maxwidth=500&maxheight=300"
    expect(response.status).to eq(200)
  end

  it "responds with status 200 for XML" do
    get "/oembed?url=http://localhost:3000/a/#{asciicast.id}&format=xml"
    expect(response.status).to eq(200)
  end

end
