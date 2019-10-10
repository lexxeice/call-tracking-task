# frozen_string_literal: true

require 'csv'
require 'pry'

file = 'Test - Some name (1).csv'

file_in_hash = []

CSV.foreach(file, headers: true) do |line|
  file_in_hash << line.to_hash
end

incoming_calls = {}

file_in_hash.each do |line|
  caller_phone = {}
  caller_phone[line['Имя клиента в системе']] = line['Номер Звонившего']
  unless incoming_calls.key?(caller_phone)
    incoming_calls[caller_phone] = line['Длительность']
  end
end

output = {}

incoming_calls.each do |line|
  name = line[0].keys
  if output.key?(name)
    output[name] += line[1].to_i
  else
    output[name] = line[1].to_i
  end
end
